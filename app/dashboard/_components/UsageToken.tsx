"use client"
import { eq } from 'drizzle-orm';
import { Button } from '@/components/ui/button'
import { db } from '@/services/db';
import { AIoutput, Usersubscription } from '@/services/schema';
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect,useState} from 'react'
import { HISTORY } from '../history/page';
import { TotalusageContext } from '@/app/(context)/TotalusageContext';
import { UsersubContext } from '@/app/(context)/UsersubContext';
function UsageToken() {
  const {user}=useUser();
  const {totalusage,setTotalusage} = useContext(TotalusageContext);
  const {usersubscription,setUsersubscription}=useContext(UsersubContext);
  const [maxwords, setmaxwords] = useState(5000);
  useEffect(() => {
    user && GetData();
    user && isUsersub();
  }, [user])
  
  const GetData=async()=>{
    const result:HISTORY[] =await db.select().from(AIoutput).where(eq(AIoutput.createdBy,user?.primaryEmailAddress?.emailAddress));
    Gettotalusage(result);
  }
  const isUsersub=async()=>{
   const result= await db.select().from(Usersubscription).where(Usersubscription?.email,user?.primaryEmailAddress?.emailAddress);
   if(result){setUsersubscription(true);setmaxwords(50000);}
  }
  const Gettotalusage=(result:HISTORY[])=>{
  let total:number=0;
  result.map((item)=>{
    total+=Number(item?.aiResponse.split(" ").length);
  })
  setTotalusage(total);
  }

  return (
    <div>
        <div className='text-white bg-primary p-3 rounded-lg m-3 font-semibold text-center'>
           <h2 >Credits</h2>
           <div className='h-2 bg-[#98f8b8] w-full rounded-full mt-2'>
                <div className=' h-2 rounded-full bg-white' style={
                    {width: `${totalusage ? (totalusage/maxwords)*100 : 0}%`,}
                }>

                </div>

           </div>
           <h2  className='font-medium text-sm mt-2'>{totalusage}/{usersubscription ? "50,000":"5000"} credits used</h2>
           {
            !usersubscription &&  <Button
            onClick={()=>window.location.href="/dashboard/billing"}
            variant='secondary' className='w-full mt-2 text-primary hover:cursor-pointer' >Upgrade plan 💎</Button>
           }
          

        </div>

    </div>
  )
}

export default UsageToken