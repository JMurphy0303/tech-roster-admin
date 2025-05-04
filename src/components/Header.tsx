"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

import { Arvo } from "next/font/google";
const arvo = Arvo({weight: "400", subsets: ['latin']});

export function Header() {

    let route:string = usePathname();

    return (
        <header className="col-span-2 opacity-50 text-white pb-4">
            <div className={`${arvo.className} font-bold text-5xl flex`}>

                {route == "/" ?
                    <div className={`${arvo.className} font-bold text-5xl hover:opacity-50`}><Link href="/about">Portfolio Sampler <span className="text-2xl">Administration</span></Link></div>
                :
                    <div className={`${arvo.className} font-bold text-5xl}`}>Portfolio Sampler <span className="text-2xl">Administration</span></div>
                }

                <picture className="pl-2">
                    <source media="(max-width:715px)" srcSet="/images/mobile.png" />
                    <img src="/images/desktop.png" width="50" height="50" alt="Current Device Icon" />
                </picture>
            </div>
            <div className="text-xs tracking-widest mt-1">Web App implemented with Next.js</div>            
        </header>
    );
}