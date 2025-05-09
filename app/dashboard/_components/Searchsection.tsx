import { SearchIcon } from 'lucide-react'
import React from 'react'

function Searchsection({Searchinput}:any) {
 
  return (
    <div className=' flex flex-col justify-center items-center p-10 bg-gradient-to-tr from-primary to-sec  shadow-lg border'>
        <h2 className='text-2xl  text-white font-bold tracking-wider '>Browse all Templates</h2>
        <p>Looking for something new today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex items-center gap-2 mt-5 bg-white p-2 rounded-lg shadow-lg w-[40%]'>
              <SearchIcon className='text-primary'/>
              <input type="text" placeholder='Search here...' className='bg-transparent w-full outline-none text-black' onChange={(e)=>Searchinput(e.target.value)} />

            </div>
        </div>
    </div>
  )
}

export default Searchsection