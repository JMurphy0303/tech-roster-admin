import Link from "next/link";

export default function About() {
    return(
        <>
            <div className="max-w-[800px] pb-3">
                <div>This web application is developed with NextJS / MongoDB. It is the administration end for the infamous portfolio sample web app developed in earlier lessons.</div>
                <div className="mt-2 text-xs">Developed for PROG3017 Full Stack Programming</div>
                <div className="text-xs">Nova Scotia Community College</div>
                <Link href="/"><input className="bg-white hover:opacity-50 text-[#035074] py-1 px-2 mt-3 rounded" type="button" value="Back" /></Link>
            </div>

        </>    
    );
}