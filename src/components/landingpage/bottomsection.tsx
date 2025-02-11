import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Bottomsection() {
  const {replace} = useRouter()
  return (
      <div className='w-full'>
          <div className='bg-[#DAD7CD] flex flex-col items-center w-full py-10 md:py-20 space-y-8 md:space-y-14 px-4 md:px-10'>
              <div className='flex flex-col space-y-4 font-light text-center'>
                  <h5 className='w-full text-2xl md:text-4xl'>You dont need to spend Hundred of</h5>
                  <h5 className='w-full text-2xl md:text-4xl'>
                      <span className='bg-[#588157] text-white font-semibold px-2 md:px-3 py-1 md:py-2 text-xl md:text-3xl inline-block my-2'>
                          Thousands of Bucks
                      </span> 
                      to disrupt the
                  </h5>  
                  <h5 className='text-2xl md:text-4xl w-full'>Media Space</h5>
              </div>

              <h5 className='text-center px-4'>Run Low cost Media Infrastructure</h5>
          
              <button 
                  className='bg-[#344E41] text-white font-semibold py-3 md:py-5 w-full sm:w-2/3 md:w-1/3 lg:w-1/5'
                  onClick={() => replace('/auth/signup')}
              >
                  Launch Gateway
              </button>     
          </div>
      </div>
  )
}
