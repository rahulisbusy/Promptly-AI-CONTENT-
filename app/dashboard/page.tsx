"use client"
import { useState } from 'react'
import React from 'react'
import Searchsection from './_components/Searchsection'
import Templatelist from './_components/Templatelist'

function Dashboard() {
    const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      <Searchsection Searchinput={(value:string)=>setUserSearchInput(value)}/>
      <Templatelist Filteredinputs={userSearchInput}/>

    </div>
  )
}

export default Dashboard