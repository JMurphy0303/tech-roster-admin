<<<<<<< HEAD
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
=======
import { getTechnologies } from '@/tools/DataManager';
import { Technology } from '@/tools/data.model';

export default async function Home() {

  const technologies:Technology[] = await getTechnologies(); 

  return (
    <div className="font-bold text-sm p-4">
      <pre>
        {JSON.stringify(technologies, null, "\t")}
      </pre>
    </div>
  );
>>>>>>> publish/main
  
}