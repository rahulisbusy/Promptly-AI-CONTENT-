"use client"
import { Button } from '@/components/ui/button'
import { Check,Loader2Icon,Star } from 'lucide-react'
import React from 'react'
import axios from 'axios';
import Razorpay from 'razorpay';
import { useState } from 'react'
import { db } from '@/services/db';
import { Usersubscription } from '@/services/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UsersubContext } from '@/app/(context)/UsersubContext';
import { useContext } from 'react';

 function page() {
  const [loading, setLoading] = useState(false);
  const {usersubscription,setUsersubscription}=useContext(UsersubContext);
  const {user}=useUser();
  console.log(user?.primaryEmailAddress?.emailAddress);
  console.log(user?.fullName)

  const createSub=()=>{
    setLoading(true);
   axios.post('/api/create-subscription',{}).then(
    (resp)=>{
      console.log(resp.data);
    Onpayment(resp.data.id);
}
   )
  }
  const Onpayment=(subId:string)=>{
  const Options={
    "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    "subscription_id":subId,
    "name":"Promptly AI",
    description:"Quarterly subscription",
    handler:async (resp:any)=>{
      if(resp)Savesub(resp?.razorpay_payment_id)
      console.log(resp);
      setLoading(false);
    }
  }
 //@ts-ignore
  const rzpay=new window.Razorpay(Options);
  rzpay.open();


  }
  const Savesub=(paymentId:string)=>{
    console.log('email',user?.primaryEmailAddress?.emailAddress);
    console.log('username',user?.fullName);
    console.log(moment().format('DD/MM/yyyy'))

    console.log('paymentId', paymentId);


    const result= db.insert(Usersubscription).values({
      email:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      active:true,
      paymentId:paymentId,
      joinDate:moment().format('DD/MM/yyyy')

    });
    console.log(result)
  }
  return (
    <div className="flex flex-col items-center py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Choose Your Plan</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-xl">
        Select the perfect plan for your needs and unlock the full potential of our service
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Free Plan */}
        <div className="border-2 border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col h-full">
          <div className="mb-8">
            <h2 className="font-semibold text-2xl text-gray-800 mb-2">Free</h2>
            <div className="flex items-baseline mb-4">
              <span className="text-5xl font-extrabold text-gray-800">$0</span>
              <span className="text-lg text-gray-500 ml-2">/month</span>
            </div>
            <p className="text-gray-600">Perfect for getting started and exploring our basic features.</p>
          </div>
          
          <div className="flex-grow">
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">5,000 Words/Month</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">20+ Content Templates</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Unlimited Downloads</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">1 Month of History</span>
              </div>
            </div>
          </div>
          
           {!usersubscription && <Button className='mt-4 py-3 px-4 ' variant={'ghost'}>Currently active</Button>}
        </div>
        
        {/* Premium Plan */}
        <div className="border-2 border-primary bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col h-full relative overflow-hidden">
          {/* Popular badge */}
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-white font-medium py-1 px-4 rounded-bl-lg rounded-tr-lg flex items-center">
              <Star className="mr-1" size={16} />
              POPULAR
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="font-semibold text-2xl text-gray-800 mb-2">Premium</h2>
            <div className="flex items-baseline mb-4">
              <span className="text-5xl font-extrabold text-primary">$2.34</span>
              <span className="text-lg text-gray-500 ml-2">/quarterly</span>
            </div>
            <p className="text-gray-600">Unlock all features and take your content to the next level.</p>
          </div>
          
          <div className="flex-grow">
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Unlimited</strong> Words/Month</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>100+</strong> Content Templates</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Priority Customer Support</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Advanced Analytics</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>12 Months</strong> of History</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Custom Branding Options</span>
              </div>
            </div>
          </div>
          {
            usersubscription ? <Button className='mt-4 py-3 px-4 ' variant={'ghost'}>Currently active</Button>
            :
            <Button disabled={loading} className='mt-4 py-3 px-4 hover:cursor-pointer hover:scale-102' onClick={createSub}>Upgrade Now {loading && <Loader2Icon className='animate-spin'/>}</Button>
          }
          
        </div>
      </div>
      
      <p className="mt-8 text-gray-500 text-center">
        All plans include our 14-day money-back guarantee
      </p>
    </div>
  )
}

export default page