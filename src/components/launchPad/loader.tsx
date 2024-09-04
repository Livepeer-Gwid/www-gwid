import React from 'react'
import GridLoader from "react-spinners/GridLoader"

export default function Loader() {
  return (
    <div className='w-full h-[50vh] py-20'>
           <div className='w-full flex flex-col items-center space-y-4'>
                  <GridLoader 
                     color='orange'
                     size={"30px"}
                  />
                 <div className=''>
                      <h5 className='font-semibold'>Launching Your Gateway</h5>

                 </div>

           </div>
    
    </div>
  )
}