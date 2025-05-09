import React, { useEffect } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'
import { useState } from 'react'

export interface TEMPLATES{
    name:string,
    desc:string,
    category:string,
    icon    :string,
    aiPrompt:string,
    slug:string,
    form:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}

function Templatelist({Filteredinputs}:any) {
    const [Templatelist, setTemplatelist] = useState(Templates);
    useEffect (()=>{
        if(Filteredinputs){
            const filteredTemplates = Templates.filter((item)=>item.name.toLowerCase().includes(Filteredinputs.toLowerCase()))
            setTemplatelist(filteredTemplates)
        }else{
            setTemplatelist(Templates)
        }

    },[Filteredinputs])
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
      {
        Templatelist.map((item:TEMPLATES,index:number)=>(

        <TemplateCard {...item} key={index}/>
        ))
      }

    </div>
  )
}

export default Templatelist