"use client";

// import functions form next-auth to enable authentication
import { useSession, signIn } from 'next-auth/react';
// import the session provider to wrap the component in order to use the useSession() hook and get access to session data
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import LoadingOverlay from '@/tools/LoadingOverlay';

export default function LoginPage() {
    return (
        <Login />
    );
}

function Login() {

    let status = "unauthenticated";

    return (
        <>
            <LoadingOverlay show={(status == "loading")} bgColor="#035074" spinnerColor="#FFFFFF" />

            {(status == "unauthenticated") ? 
                <>
                    <div className="mb-3">Please log in with your Google Account...</div>
                    <button className="bg-accent hover:bg-accent/50 text-white font-bold py-2 px-4 mr-3 rounded" 
                    onClick={() => signIn("google")}>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-1">
                            <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clipRule="evenodd" />
                            </svg>
                            <>login with google</>
                        </div>
                    </button>
                </>
            :
                <></>}
        </>
    );
}