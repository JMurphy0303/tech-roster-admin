export const dynamic = "force-dynamic";
// export const revalidate = 60;

import { SamplesList } from '@/components/SamplesList';
import { getSamples } from '@/tools/DataManager';
import { Sample } from "@/tools/samples.model";

export default async function Home() {

    // data fetch on server (server component)
    const samplesData:Sample[] = await getSamples();
  
    return (
        <>
            {(samplesData.length > 0) ?
                <SamplesList samples={samplesData} />
                :
                <>No portfolio samples available :(</>
            }
        </>
    );
  
}