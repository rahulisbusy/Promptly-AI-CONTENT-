import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center h-full w-full'>
        <UserProfile/>
    </div>
  )
}

export default page