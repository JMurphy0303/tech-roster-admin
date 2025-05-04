"use client"

import Link from 'next/link';
import { usePathname } from "next/navigation";

export function Navigation() {

    // get current route
    let route:string = usePathname();

    return(
        <nav className="mb-6">
            
            Views: 
            <span className="mr-3">Views:</span>
            <Link href="/">
                <input 
                    className={`${(route == "/") ? "bg-[#EEAA40]" : "bg-white hover:opacity-50"} text-[#035074] py-1 px-2 mr-2 rounded`} 
                    type="button" value="Selected" 
                    disabled={(route == "/") ? true : false} />
            </Link>

            <Link href="/all">
                <input 
                    className={`${(route == "/all") ? "bg-[#EEAA40]" : "bg-white hover:opacity-50"} text-[#035074] py-1 px-2 mr-2 rounded`} 
                    type="button" value="All" 
                    disabled={(route == "/all") ? true : false} />
            </Link>

            <Link href="/random">
                <input 
                    className={`${(route == "/random") ? "bg-[#EEAA40]" : "bg-white hover:opacity-50"} text-[#035074] py-1 px-2 mr-2 rounded`} 
                    type="button" value="Random" 
                    disabled={(route == "/random") ? true : false} />
            </Link>

            <Link href="/search">
                <input 
                    className={`${(route == "/search") ? "bg-[#EEAA40]" : "bg-white hover:opacity-50"} text-[#035074] py-1 px-2 mr-2 rounded`} 
                    type="button" value="Search" 
                    disabled={(route == "/search") ? true : false} />
            </Link>

        </nav>
    );
}