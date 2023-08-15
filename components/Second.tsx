import React from 'react'

const Second = () => {
  return (
    <>
      <div className=' ml-52 mt-10 rounded-lg' id='div1'>
               <div className='flex float-left' >
                  <img className='h-52' src="./images/secondp1.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-green-100 p-1 '>A technology tailored to your needs</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Occupancy sensors</p>
                        <p className='w-80 mb-3 text-sm'>Analyze the occupancy of each area of your building with our latest-generation occupancy detectors.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Ask for a demo</button>
                        </div>               
               </div>

               <div className='flex float-left  ml-5' >
                  <img className='h-52' src="./images/secondp2.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1 '>Site audit </p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>On-site visit</p>
                        <p className='w-72 mb-8 text-sm'>Our teams travel and audit each room to recommend the right number of sensors.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Contact us</button>
                        </div>               
               </div>
                                
                <div className='flex float-left ' >
                  <img className='h-52' src="./images/secondp3.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1'>Save millions of € / $</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Right-Size your real estate portfolio</p>
                        <p className='w-80 mb-3 text-sm'>Remote work, Flex-Office – visualize your actual space requirements in square meters on our platform.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Know more</button>
                        </div>        
                        </div>       
               
               <div className='flex float-left ml-7' >
                  <img className='h-52' src="./images/secondp4.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1 '>Une solution ouverte et interfaçable</p>
                        <p className='font-bold p-1 pb-1 text-lg w-60 pt-3'>Integration with your BMS - BAS (RestAPI)</p>
                        <p className='w-80 mb-3 text-sm'>Our sensors connect to your BMS (Building Management System) to optimize regulation based on occupancy.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Know more</button>
                        </div>               
               </div>
                                             
               </div>

    </>
  )
}

export default Second
