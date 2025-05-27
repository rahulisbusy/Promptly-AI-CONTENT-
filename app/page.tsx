'use client'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

function Page() {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center space-y-8">
          {/* Animated spinner */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-indigo-400 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          
          {/* Loading text with animation */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-800">Loading</h2>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
          
          {/* Subtle description */}
          <p className="text-slate-600 text-sm max-w-sm mx-auto">
            Setting up your experience...
          </p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 max-w-md mx-4">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-800">Authentication Required</h2>
              <p className="text-slate-600">
                Please sign in to continue to your dashboard
              </p>
            </div>
            
            {/* Call to action hint */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sign in to get started</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Success animation */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-green-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-800">Redirecting...</h2>
          <p className="text-slate-600">Taking you to your dashboard</p>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 bg-slate-200 rounded-full h-2 mx-auto overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default Page