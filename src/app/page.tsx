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
  
}