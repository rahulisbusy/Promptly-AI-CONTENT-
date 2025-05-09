import React from 'react'
import { TEMPLATES } from './Templatelist'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATES) {
  return (
    <Link   href={`/dashboard/content/${item?.slug}`}>
       <div  className='flex flex-col border border-md rounded-lg p-5 gap-2 cursor-pointer hover:shadow-lg hover:scale-101 transition-all '>
       <Image src={item.icon} alt='icon' width={50} height={50}/>
       <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-600 line-clamp-3'>{item.desc}</p>
  


    </div>
    </Link>
   
  )
}

export default TemplateCard