"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import LoadingOverlay from "@/tools/LoadingOverlay";

export default function Create() {

    const POST_URL:string = "/api/post";
    const router:AppRouterInstance = useRouter();

    // ----------------------------------- adding new course
    const submit = async (e:any) => {
        setLoading(true);



    };    

    // ----------------------------------- setting state variables
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");  
    const [url, setURL] = useState<string>("");  
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
            <LoadingOverlay show={loading} bgColor="#035074" spinnerColor="#FFFFFF" />

            <div>
                <div className="py-4 text-accent font-bold text-xl">Add New Sample:</div>
                <div className="mt-2.5 mb-1">Name:</div>
                <div><input type="text" className="appearance-none bg-white rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none" value={name} onChange={(e:any) => setName(e.target.value)} maxLength={50} /></div> 
                
                <div className="mt-2.5 mb-1">Description:</div>
                <div><textarea className="appearance-none bg-white rounded w-[500px] py-2 px-4 text-gray-700 leading-tight focus:outline-none" value={description} onChange={(e:any) => setDescription(e.target.value)} maxLength={300} rows={5} /></div> 

                <div className="mt-2.5 mb-1">Link:</div>
                <div><input type="text" className="appearance-none bg-white rounded w-[500px] py-2 px-4 text-gray-700 leading-tight focus:outline-none" value={url} onChange={(e:any) => setURL(e.target.value)} maxLength={100} /></div> 
                
                <div className="mt-5">
                    <button className="bg-accent hover:bg-accent/50 text-white font-bold py-2 px-3 rounded mr-2" onClick={submit}>Ok</button>
                    <Link href={"/"}><button  className="bg-accent hover:bg-accent/50 text-white font-bold py-2 px-3 rounded mr-1">Cancel</button></Link>
                </div>
            </div>
        </>
    );  
}