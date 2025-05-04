import Image from 'next/image';
import Link from 'next/link';
import { Sample } from "@/tools/samples.model";
import Logout from '@/components/Logout';

export function SamplesList({ samples }:{ samples:Sample[]}) {
    return (
        <>
            <div className="mt-3 mb-6 flex grow-0">
                <Link href="/create">
                    <button className="bg-accent hover:bg-accent/50 text-white font-bold p-2 mr-2 rounded flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                        </svg>
                        Add New Sample
                    </button>
                </Link>

                <Logout />

            </div>
            <div className="mb-3">Portfolio Samples:</div>
            <div className="flex flex-col flex-wrap">
                {samples.map((data:Sample,n:number) => {
                    return (
                        <div key={n} className="bg-[#02405C] max-w-[700px] rounded-md p-4 mb-3">
                            <div className="text-xl text-accent pb-2">Sample {n+1}</div>
                            <div className="flex flex-nowrap">
                                <div className="mr-3">
                                    <Image src={"/images/" + data.images[0].filename} priority={true} width={50} height={50} alt="Portfolio Sample" className="rounded" />
                                </div>
                                <div>
                                    <div className="font-title font-bold pb-1">{data.name}</div>
                                    <div className="pb-1 max-w-[600px]">{data.description}</div>
                                    <a href="{data.url}" className="hover:underline text-xs" target="_blank">{data.url}</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}