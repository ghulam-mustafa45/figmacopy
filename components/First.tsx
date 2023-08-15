import React from 'react'

const First = () => {
  return (
   <>
   <div className=' ml-52 mt-10 rounded-lg' id='div1'>
               <div className='flex float-left' >
                  <img className='h-52' src="/images/divc1.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-green-100 p-1 '>Up to 50% energy savings</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>BMS - BAS</p>
                        <p className='w-80 mb-3 text-sm'>Monitor and regulate your buildings' energy consumption with our intelligent system for control and monitoring, compliant with the highest French standards.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Know more</button>
                        </div>               
               </div>

               <div className='flex float-left  ml-5' >
                  <img className='h-52' src="/images/divc2.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1 '>Site and HVAC Installations Audit</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Technical assessment</p>
                        <p className='w-72 mb-8 text-sm'>Our enigneer teams travel and audit your installations to recommend the appropriate technical plan.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Contact us</button>
                        </div>               
               </div>
                                
                <div className='flex float-left ' >
                  <img className='h-52' src="/images/divc3.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1'>Partners</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>A request for your client?</p>
                        <p className='w-80 mb-3 text-sm'>We accompany you from A to Z in the implementation of our solution, from the diagnosis to the installation</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Contact us</button>
                        </div>        
                        </div>       
               
               <div className='flex float-left ml-7' >
                  <img className='h-52' src="/images/divc4.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1 '>An open and centralized solution</p>
                        <p className='font-bold p-1 pb-1 text-lg w-60 pt-3'>Setting up a BOS (Building Operating System)</p>
                        <p className='w-80 mb-3 text-sm'>Computers have Windows, Apple, Linux, and now buildings also have their OS!</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Know more</button>
                        </div>               
               </div>
                                             
               </div>
   </>
  )
}

export default First
