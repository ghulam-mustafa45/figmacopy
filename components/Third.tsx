import React from 'react'

const Third = () => {
  return (
    <>
    <div className=' ml-52 mt-10 rounded-lg' id='div1'>
               <div className='flex float-left' >
                  <img className='h-52' src="./images/thirdp1.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-green-100 p-1 '>Up to 30% savings</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Real-world cleanliness</p>
                        <p className='w-80 mb-3 text-sm'>Clean only the offices and areas that have been occupied during the day.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Know more</button>
                        </div>               
               </div>

               <div className='flex float-left  ml-5' >
                  <img className='h-52' src="./images/thirdp2.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1 '>Adherence to the requirements</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Tracking of passages</p>
                        <p className='w-72 mb-8 text-sm'>Visualize the cleaning progress and time spent on each zone of your buildings.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Know more</button>
                        </div>               
               </div>
                                
                <div className='flex float-left ' >
                  <img className='h-52' src="./images/thirdp3.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1'>Export of essential data</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Visualize essential data</p>
                        <p className='w-80 mb-3 text-sm'>Visualize your data on our platform or simply on Google Sheets & Excel.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Ask for a demo</button>
                        </div>        
                        </div>       
               
               <div className='flex float-left ml-7' >
                  <img className='h-52' src="./images/thirdp4.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1 '>Partners</p>
                        <p className='font-bold p-1 pb-1 text-lg w-60 pt-3'>You are a cleaning or facilities company ?</p>
                        <p className='w-80 mb-3 text-sm'>Contact us if you wish to implement a Smart Cleaning project to serve your customers.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Contact us</button>
                        </div>               
               </div>
                                             
               </div> 
    </>
  )
}

export default Third
