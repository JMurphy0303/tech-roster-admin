"use client";

import Link from 'next/link';

export default function Denied() {
    return (
        <>
        <div className="flex text-yellow-500 mb-4 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 mr-2">
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
            </svg>                    
            <>Unauthorized login - please try another google account login...</>
        </div>
        <div>
            <Link href="/login">
                <button className="bg-accent hover:bg-accent/50 text-white font-bold py-2 px-4 mr-3 rounded">
                    Continue...
                </button>
            </Link>
        </div>
        </>
    );
}