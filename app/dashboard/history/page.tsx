"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/services/db';
import { AIoutput } from '@/services/schema';
import { Button } from '@/components/ui/button';
import { CopyCheckIcon } from 'lucide-react';
import { ToastContainer, toast,Slide } from 'react-toastify';


export interface HISTORY {
  id: number; // Primary key
  formdata: string; // Form data submitted by the user
  aiResponse: string; // AI-generated response
  template: string; // Template name
  createdBy: string; // User who created the entry
  createdAt: string; // Date when the entry was created
}

function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const notify = () =>toast.success('Copied to Clipboard', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
    });;
  // Fetch data from the database
  const fetchHistory = async () => {
    try {
      // Fetch data from the AIoutput table using Drizzle ORM
      const data = await db.select().from(AIoutput);
      setHistory(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  useEffect( () => {
     fetchHistory();
  }, [history]);

  return (
    <div className='p-5'>
      <h2 className='text-xl font-bold'>History</h2>
      <p className='text-md text-gray-400'>Search your previously generated AI content</p>

      {/* Table Header */}
      <div className='grid grid-cols-8 gap-3 mt-5 font-bold'>
        <div className='col-span-2'>Template</div>
        <div className='col-span-3'>AI Response</div>
        <div className='col-span-1'>Date</div>
        <div className='col-span-1'>Words</div>
        <div className='col-span-1'>Copy</div>
      </div>

      {/* Table Content */}
      {history.length === 0 ? (
        <div className='flex justify-center mt-5'>
          <p className='text-gray-500 mt-3 text-xl font-extrabold'>No history found.</p>
        </div>
      ) : (
        <div className='mt-2'>
          {history.map((item, index) => (
            <div key={index} className='grid grid-cols-8 gap-3 p-2 border-b'>
              {/* Template Name */}
              <div className='col-span-2 font-medium'>{item.template}</div>

              {/* AI Response */}
              <div className='col-span-3 text-gray-600 line-clamp-3'>{item.aiResponse}</div>

              {/* Date */}
              <div className='col-span-1 text-sm text-gray-400'>{item.createdAt}</div>

              {/* Word Count */}
              <div className='col-span-1 '>
                {item.aiResponse ? item.aiResponse.split(' ').length : 0}
              </div>

              {/* Copy Button */}
              <div className='col-span-1 p-2'>
                <Button onClick={() => {
                  navigator.clipboard.writeText(item.aiResponse || '');
                  notify();
                }} className=' hover:cursor-pointer'><CopyCheckIcon /></Button>
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                  transition={Slide}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryPage;