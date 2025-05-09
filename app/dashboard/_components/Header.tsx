import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
function Header() {
  return (
    <div className='flex justify-between items-center p-2 shadow-lg border bg-white'>
      <div>
        <form className="flex items-center max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search here..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-sec "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <div className='flex gap-5 items-center'>
        <Link href={"/dashboard/billing"} >
        <h2 className='bg-primary p-2 rounded-full text-xs text-white hover:cursor-pointer hover:border hover:scale-102 duration-300'>Join membership for $2.34 per month🔥.Flash sale is live.⚡ </h2>
        </Link>
        
        <UserButton/>
      </div>
    </div>
  )
}

export default Header