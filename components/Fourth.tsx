import React from 'react'

const Fourth = () => {
  return (
    <>
    <div className=' ml-52 mt-10 rounded-lg' id='div1'>
               <div className='flex float-left' >
                  <img className='h-52' src="./images/fourthp1.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-green-100 p-1 '>Eco-responsible commitment</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Access badges made from recycled wood</p>
                        <p className='w-80 mb-3 text-sm'>Replace your plastic badges with a sustainable alternative made from recycled wood.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Know more</button>
                        </div>               
               </div>

               <div className='flex float-left  ml-5' >
                  <img className='h-52' src="./images/fourthp2.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1 '>Digitalization of access control</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Access badges on smartphones</p>
                        <p className='w-72 mb-8 text-sm'>Digitize your access using your work phone as an access badge.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Ask for a demo</button>
                        </div>               
               </div>
                                
                <div className='flex float-left ' >
                  <img className='h-52' src="./images/fourthp3.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1'>Safety standards</p>
                        <p className='font-bold p-1 pb-1 text-lg w-56 pt-3'>Benefit from the highest security standards</p>
                        <p className='w-80 mb-3 text-sm'>Our systems comply with the French recommendations for securing access control systems.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Know more</button>
                        </div>        
                        </div>       
               
               <div className='flex float-left ml-7' >
                  <img className='h-52' src="./images/fourthp4.svg" alt="error" />
                        <div className='ml-3' >
                        <p className='bg-gray-200 p-1 '>Events</p>
                        <p className='font-bold p-1 pb-1 text-lg w-60 pt-3'>Need attendance tracking for your events?</p>
                        <p className='w-80 mb-3 text-sm'>Contact us if you wish to implement access control for your events/filming.</p>
                        <button className="rounded-full bg-green-100 pl-7 pr-7 p-1 ml-5">Contact us</button>
                        </div>               
               </div>
                                             
               </div>
    </>
  )
}

export default Fourth
