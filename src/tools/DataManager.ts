<<<<<<< HEAD
import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { Sample } from "./samples.model";
import { InsertOneResult } from "mongodb";
import sanitizeHtml from "sanitize-html";

// MongoDB database connectivity constants
// const URL:string = "mongodb://mongo:27017";
const URL:string = process.env.MONGO_URL!;

const DB_NAME:string = "dbPortfolio";
const COLLECTION_NAME:string = "samplesCollection";

export async function getSamples() {
  let mongoClient:MongoClient = new MongoClient(URL);
  let samplesArray:Sample[] = [];

  try {
    // make connection to mongoDB server (ASYNC task)
    await mongoClient.connect();
    samplesArray = await mongoClient.db(DB_NAME).collection<Sample>(COLLECTION_NAME).find().sort("name", 1).toArray();   
    // need to convert ObjectId objects to strings - otherwise it cannot be converted to JSON
    samplesArray.forEach((sample:Sample) => sample._id = sample._id.toString());
  } catch (error:any) {
    throw error;
  } finally {
    mongoClient.close();
  }

  return samplesArray;
}

export async function createSample(request: NextRequest) {
  let mongoClient: MongoClient = new MongoClient(URL);
  try {
      await mongoClient.connect(); 

      // fetch the body from the request (async task)
      const body:any = await request.json();

      // sanitizing input
      body.name = sanitizeHtml(body.name);
      body.description = sanitizeHtml(body.description);
      body.url = sanitizeHtml(body.url);
      // hard coding the images for our lesson sample
      body.images = [{"filename":"image11.png"},{"filename":"image12.png"},{"filename":"image13.png"},{"filename":"image14.png"}];

      // insert new document into DB
      let result:InsertOneResult = await mongoClient.db(DB_NAME).collection<Sample>(COLLECTION_NAME).insertOne(body);

      // returning response and setting status code to 200
      return NextResponse.json(result, {status: 200});

  } catch (error:any) {
      return NextResponse.json({error: error.message}, {status: 500});
  } finally {
      mongoClient.close();
  }
=======
import { MongoClient, InsertOneResult, UpdateResult, ObjectId, DeleteResult, Collection } from "mongodb";
import { Technology, Course } from "@/tools/data.model";

import { NextRequest, NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";

// MongoDB constants
const MONGO_URL:string = process.env.MONGO_URL || "mongodb://mongo:27017";
const MONGO_DB_NAME:string = "dbTechs";	
const MONGO_COLLECTION_TECHS:string = "technologies";

export async function getTechnologies() {
    // construct a MongoClient object
    let mongoClient: MongoClient = new MongoClient(MONGO_URL);

    let techArray:Technology[];
    try {
        await mongoClient.connect();
        // get JSON data from mongoDB server (ASYNC task)
        techArray = await mongoClient.db(MONGO_DB_NAME).collection<Technology>(MONGO_COLLECTION_TECHS).find().toArray();
        // need to convert ObjectId objects to strings
        techArray.forEach((tech:Technology) => tech._id = tech._id.toString());
    } catch (error:any) {
        console.log(`>>> ERROR : ${error.message}`);
        throw error;
    } finally {
        mongoClient.close();
    }

    return techArray;
}

export async function createTechnology(request:NextRequest) {
    let mongoClient:MongoClient = new MongoClient(MONGO_URL);

    try {
        await mongoClient.connect();

        // fetch the JSON from the request
        const body:any = await request.json();

        // console.log("BEFORE:");
        // console.log(body.description);
        // // sanitize input
        // body.description = sanitizeHtml(body.description);
        // console.log("AFTER:");
        // console.log(body.description);

        // sanitize incoming JSON
        body.name = sanitizeHtml(body.name);
        body.description = sanitizeHtml(body.description);
        body.difficulty = sanitizeHtml(body.difficulty);
        body.courses.forEach((course:Course) => {
            course.code = sanitizeHtml(course.code);
            course.name = sanitizeHtml(course.name);
        });

        // insert the new technology into the mongodb db
        let result:InsertOneResult = await mongoClient.db(MONGO_DB_NAME).collection<Technology>(MONGO_COLLECTION_TECHS).insertOne(body);

        // APPROACH I
        // return new NextResponse(JSON.stringify(body), { status:200 });
        // APPROACH II
        // return NextResponse.json(body, {status:200});
        return NextResponse.json(result, {status:200});

    } catch(error:any) {
        // return new NextResponse(JSON.stringify({ error: error.message }), { status:500 });
        return NextResponse.json({ error: error.message }, { status:500 });
    } finally {
        mongoClient.close();
    }
}

export async function updateTechnology(request:NextRequest, id:string) {
    let mongoClient:MongoClient = new MongoClient(MONGO_URL);

    try {
        await mongoClient.connect();

        // fetch the JSON from the request
        const body:any = await request.json();

        // is the id a valid objectID?
        if (!ObjectId.isValid(sanitizeHtml(id))) {
            return NextResponse.json({ error:"Invalid ID format" },{status: 404});
        }
        
        // sanitize the id and convert to ObjectId
        let techID:ObjectId = new ObjectId(sanitizeHtml(id));


        // sanitize incoming JSON
        body.name = sanitizeHtml(body.name);
        body.description = sanitizeHtml(body.description);
        body.difficulty = sanitizeHtml(body.difficulty);
        body.courses.forEach((course:Course) => {
            course.code = sanitizeHtml(course.code);
            course.name = sanitizeHtml(course.name);
        });

        // update the technology document
        let techCollection:Collection<Technology> = mongoClient.db(MONGO_DB_NAME).collection<Technology>(MONGO_COLLECTION_TECHS);
        let selector:Object = { "_id": techID };
        let newValues:Object = { $set: body };
        let result:UpdateResult = await techCollection.updateOne(selector, newValues);

        if (result.matchedCount <= 0) {
            return NextResponse.json({ error: "No technology documents found with ID" }, { status:404 });
        } else {
            return NextResponse.json(result, {status:200});
        }

    } catch(error:any) {
        return NextResponse.json({ error: error.message }, { status:500 });
    } finally {
        mongoClient.close();
    }
}

export async function deleteTechnology(id: string) {
    let mongoClient: MongoClient = new MongoClient(MONGO_URL);

    try {
        await mongoClient.connect();

        if (!ObjectId.isValid(sanitizeHtml(id))) {
            return NextResponse.json({ error: "Invalid ID format" });
        }

        let techID: ObjectId = new ObjectId(sanitizeHtml(id));
        let techCollection = mongoClient.db(MONGO_DB_NAME).collection(MONGO_COLLECTION_TECHS);


        let result: DeleteResult = await techCollection.deleteOne({ _id: techID });

        if (result.deletedCount <= 0) {
            return NextResponse.json({ error: "No technology found with that ID" });
        } else {
            return NextResponse.json({ message: "Technology deleted successfully" });
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    } finally {
        mongoClient.close();
    }
>>>>>>> publish/main
}