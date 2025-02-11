// 'use client'
// import { useEffect, useState } from 'react';
// import { db } from '@/utils/db';
// import { AIOutput } from '@/utils/schema';
// import { currentUser } from '@clerk/nextjs/server';
// import { desc, eq } from 'drizzle-orm';
// import Templates from '@/app/(data)/Templates';
// import { Button } from '@/components/ui/button';

// export interface HISTORY {
//   id: number;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string;
// }

// const HistoryTable = () => {
//   const [history, setHistory] = useState<HISTORY[]>([]);
  
//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const user = await currentUser();
//         if (!user) return;

//         const data = await db
//           .select()
//           .from(AIOutput)
//           .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress!))
//           .orderBy(desc(AIOutput.id));

//         setHistory(data as HISTORY[]); // Ensure correct typing
//       } catch (error) {
//         console.error('Error fetching history:', error);
//       }
//     };

//     fetchHistory();
//   }, []);

//   const GetTemplateName = (slug: string) => {
//     const template = Templates.find((item) => item.slug === slug);
//     return template ? template.name : 'Unknown Template';
//   };

//   const handleCopy = (text: string) => {
//     navigator.clipboard.writeText(text).then(() => {
//       alert('Copied to clipboard!');
//     });
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border-b">Template</th>
//             <th className="py-2 px-4 border-b">AI Response</th>
//             <th className="py-2 px-4 border-b">Date</th>
//             <th className="py-2 px-4 border-b">Words</th>
//             <th className="py-2 px-4 border-b">Copy</th>
//           </tr>
//         </thead>
//         <tbody>
//           {history.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-50">
//               <td className="py-2 px-4 border-b">{GetTemplateName(item.templateSlug)}</td>
//               <td className="py-2 px-4 border-b">{item.aiResponse}</td>
//               <td className="py-2 px-4 border-b">
//                 {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}
//               </td>
//               <td className="py-2 px-4 border-b">
//                 {item.aiResponse?.split(' ').length || 0}
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <Button onClick={() => handleCopy(item.aiResponse || '')}>Copy</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HistoryTable;
// app/history/page.tsx (Server Component)
import { currentUser } from "@clerk/nextjs/server";
import HistoryTable from "@/app/dashboard/historytable";

export default async function HistoryPage() {
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  if (!userEmail) {
    return <div>User not authenticated.</div>;
  }

  return <HistoryTable userEmail={userEmail} />;
}
