"use client"
import React from 'react'
import { TEMPLATES } from '../../_components/Templatelist'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

interface PROPS{
    selectedTemplate?: TEMPLATES;
    userFormInput?:any;
    loading?:boolean;
}

function Inputsection({selectedTemplate,userFormInput,loading}:PROPS) {
    const [formdata, setFormdata] = useState<any>();
    const handleInputchange=(e:any)=>{
       const {name,value}=e.target;
       setFormdata({...formdata,[name]:value});

    }

    const onSubmit=(e:any)=>{
    e.preventDefault();
    userFormInput (formdata);

    }
  return (
    <div className='p-5 shadow-md rounded-md bg-white'>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' height={50} width={50}/>
        <h2 className='text-2xl font-bold mb-2 text-primary'>{selectedTemplate?.name}</h2>
        <p className='text-gray-400  '>{selectedTemplate?.desc}</p>

        <form className='mt-4' onSubmit={onSubmit}>
            {selectedTemplate?.form.map((item,index)=>(
                <div className='my-2 flex flex-col gap-2 mb-10 justify-center'>
                    <label className='font-bold'> {item?.label}</label>
                    {
                    item?.field=='input' ? <Input name={item.name} required={item?.required} onChange={handleInputchange}
                    /> :
                     <Textarea
                     name={item.name} required={item?.required} onChange={handleInputchange}/> 
                    }

                </div>

            ))}
        <Button type='submit' className='py-6 w-full text-md hover:cursor-pointer' disabled={loading}>
            {loading && <LoaderCircle/>}
            Generate Content🤖!</Button>
        </form>
    </div>
  )
}

export default Inputsection