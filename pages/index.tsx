import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BsPersonCircle,BsYoutube,BsLinkedin} from 'react-icons/bs';
import React, {useState} from 'react';
import Second from '@/components/Second';
import First from '@/components/First';
import Third from '@/components/Third';
import Fourth from '@/components/Fourth';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   const components = [<First />, <Second />,< Third/>,<Fourth />];
   const [activeIndex, setActiveIndex] = useState(0);

const handleclick=(index:number)=>{
   setActiveIndex(index);
};


  return (
   <>
   <div className='bg-white'>
    <nav className="bg-white  text-blue-900 text-sm font-semibold ">
       <li> <img className='logo' src="./images/logo.svg" alt="error" /></li>
        <ul className="px-20  flex space-x-14 content-center">
            <li className="cursor-pointer">Our solutions</li>
            <li className="cursor-pointer">Partners</li>
            <li className="cursor-pointer">Ressources</li>
            <li > <button className="rounded-full bg-blue-600 text-white pl-7 pr-7 p-1 ">Ask for a demo</button></li>
            <li className="cursor-pointer  flex flex-row "><BsPersonCircle/>Customer Portal</li>
            <li className='cursor-pointer float-left '> <img   src="./images/flag.svg" alt="error" /></li> 
        </ul>
    </nav>
   
   
<div>
      <img src="images/back1.svg" alt="error" />
      <p className='hd1'>The Brain of Smart Buildings</p>
      <img className="ml-9" src="./images/icons.svg" alt="error" />
      <p className='text1'>The most powerful BMS - BOS to monitor your occupancy and energy consumption</p>
         <div className='rounded-t-lg text-center bg-white ml-32 relative w-24 font-bold text-blue-950'><p>My goal is:</p>
            <div className='border-2 w-5 border-blue-700 rounded-full inline-block mb-2 m-auto'></div>
         </div>

      <div className='rounded-tr-3xl absolute bg-gray-100 flex pb-3 '>
      <div className='ml-32 bg-white p-2 rounded-lg mt-5 shadow-lg '>
         <img className='h-16 m-auto' src="./images/divp1.svg" alt="error" />
         <p className='w-24 text-sm text-center'>Installing a BMS-BAS</p>
         </div>

         <div className='ml-7 bg-white p-2 rounded-lg mt-5 flex-1 shadow-lg'>
         <img className='h-16 m-auto' src="./images/divp2.svg" alt="error" />
         <p className='w-24 text-sm text-center'>Analyzing the attendance</p>
         </div>

         <div className='ml-7 bg-white p-2 rounded-lg mt-5 shadow-lg'>
         <img className='h-16 m-auto' src="./images/divp3.svg" alt="error" />
         <p className='w-24 text-sm text-center'>Installing an access control system</p>
         </div>

         <div className='ml-7 bg-white p-2 rounded-lg mt-5 shadow-lg'>
         <img className='h-16 m-auto' src="./images/divp4.svg" alt="error" />
         <p className='w-24 text-sm text-center'>Managing and monitoring the cleaning</p>
         </div>

         <div className='ml-7 bg-white p-2 rounded-lg mt-5 mr-28 shadow-lg'>
         <img className='h-16 m-auto' src="./images/divp5.svg" alt="error" />
         <p className='w-24 text-sm text-center'>Setting up a BOS</p>
         </div>
         </div>
</div>


<div className='mt-60 '>
      <h1 className=' text-center    font-bold text-3xl'>Make your buildings smart & connected </h1>
      <p className=' text-center  '>Our technological solutions to meet your needs:</p>

      <div id='containor'  >  
         <div className='flex  mt-10 w-2/3 content-center m-auto space-x-3 ' >
            <button onClick={()=>handleclick(0)}>
                  <div className='flex-1 flex flex-row text-center bg-green-100 shadow-lg'  >
                     <img src="./images/divp1.svg" alt="error" />
                     <p className='w-28 font-semibold'>Installing a BMS - BAS</p>
                  </div>
               </button>
               <button onClick={()=>handleclick(1)}>
                  <div className='flex flex-row text-center   flex-1 shadow-lg' >
                     <img src="./images/divp2.svg" alt="error" />
                     <p className='w-28 font-semibold'>Analyzing the attendance</p>
                  </div>
               </button>
               <button onClick={()=>handleclick(2)}>
               <div className='flex flex-row text-center   flex-1 shadow-lg'>
                  <img src="./images/divp4.svg" alt="error" />
                  <p className='w-28 font-semibold'>Managing and monitoring the cleaning</p>
               </div></button>

               <button onClick={()=>handleclick(3)}>
               <div className='flex flex-row text-center shadow-lg  '>
                  <img src="./images/divp3.svg" alt="error" />
                  <p className='w-28 font-semibold'>Installing an access control system</p>
               </div></button>
         </div>

            <div className="changing-containor">
            {components[activeIndex]}
            </div>

      </div>

</div>

<div className=' float-left bg-white mt-16 w-full '>
      <h1 className=' ml-96 text-center  font-bold text-[30px] w-[33%] '>A dedicated project manager, for a worry-free installation</h1> 
      <div className='border-2 w-5 border-blue-700 rounded-full inline-block ml-[44%]'>
      </div>
         <p className='text-center ml-[31%] w-96 font-semibold text-sm'>Our experts specialized in smart buildings projects guide your project from A to Z</p>
         <div className='flex mt-10 ml-40'>
            <img className='h-80' src="./images/divd1.svg" alt="error" />
            <div>
                     <div className='ml-8 float-left '>
                        <img src="./images/divd2.svg" alt="error" />
                        <p className='font-bold'>A team at your service</p>
                        <p className='w-64'>Available Monday to Friday from 9 am to 6 pm (Paris Time Zone).</p>
                     </div>

                     <div className='ml-8 float-left'>
                        <img src="./images/divd3.svg" alt="error" />
                        <p className='font-bold'>Experts in smart buildings</p>
                        <p className='w-64'>Continuously trained on the latest industry developments.</p>
                     </div>

                     <div className='ml-8 mt-36 '>
                        <img src="./images/divd4.svg" alt="error" />
                        <p className='font-bold'>Customized maintenance</p>
                        <p className='w-64'>We monitor the operation of your equipment 24/7.</p>
                     </div>
                           
                    <div className='flex float-right -mt-32'>
                     <div className='ml-8  float-left'>
                        <img src="./images/divd3.svg" alt="error" />
                        <p className='font-bold'>Experts in smart buildings</p>
                        <p className='w-64'>Continuously trained on the latest industry developments.</p>
                     </div></div>
             </div>

         </div>
</div>

<div className='float-left bg-white w-full' >
   <h1 className=' text-3xl font-bold  ml-[40%]  pt-20'>They trust us</h1>
         <div className='p-4 bg-gray-200 mt-5 ml-44 mr-44 rounded-sm '>
               <div className='ml-[5%] flex bg-white w-fit rounded-md'>
                     <img src="./images/dive1.svg" alt="error" />
                     <img className='ml-4 ' src="./images/dive2.svg" alt="error" />
                     <img className='ml-4' src="./images/dive3.svg" alt="error" />
                     <img className='ml-4' src="./images/dive4.svg" alt="error" />
               </div>
         </div>
</div>

<div className='pt-16 float-left bg-white w-full mb-10 '>
      <h1 className='ml-52 font-bold text-3xl   ' >How does an installation process unfold? </h1>
      <div className='flex mt-7 '>
         <div className='shadow-xl w-fit text-center ml-9 p-3'>
            <img className='m-auto' src="./images/divf1.svg" alt="erro" />
            <p className='font-bold'>Project validation</p>
            <p className=' w-56'>Our team meets with you and listens to your project. They verify its feasibility with you.</p>
         </div>

         <div className='shadow-xl w-fit text-center ml-9 p-3'>
            <img className='m-auto' src="./images/divf2.svg" alt="erro" />
            <p className='font-bold'>Technical inspection</p>
            <p className=' w-56'>Our technical team comes to your location to define the technical installation plan.</p>
         </div>

         <div className='shadow-xl w-fit text-center ml-9 p-3'>
            <img className='m-auto' src="./images/divf3.svg" alt="erro" />
            <p className='font-bold'>Quotation acceptance</p>
            <p className=' w-56'>We will send you a financial proposal to initiate the project.</p>
         </div>

         <div className='shadow-xl w-fit text-center ml-9 p-3 '>
            <img className='m-auto' src="./images/divf4.svg" alt="erro" />
            <p className='font-bold'>Installation</p>
            <p className=' w-56'>Let's get started, we'll schedule a date for the installation and programming.</p>
         </div>
         </div>
</div>

<div >
<h1 className=' ml-96 text-center  font-bold text-[30px] w-[33%] '>Find our Guides & Use Cases</h1> 
<div className='border-2 w-5 border-blue-700 rounded-full inline-block ml-[44%]'></div>
      <div className='flex w-fit m-auto '>
      <div className='w-1/4 m-auto bg-green-50 rounded-xl p-3 h-80'>
         <p className='font-bold w-52 pb-6 text-sm'>All you need to know about R2S and SmartScore labels</p>
         <p className='w-52 text-xs pb-1'>This guide provides comprehensive insights into R2S and SmartScore labels, offering all the essential information you need to understand these certifications</p>
         <a className='font-semibold pb-2 text-sm' href="#">Discover the labels</a>
         <img className='h-36' src="./images/divg1.svg" alt="error" />
      </div>

      <div className='w-2/4 m-auto bg-pink-100 rounded-xl p-3 ml-5 h-80'>
         <p className='font-bold w-52 pb-7 text-sm'>Manage the energy consumption of your building</p>
         <p className='w-52 text-xs pb-8'>How to anticipate and control the energy costs of your buildings using technology?</p>
         <a className='font-semibold pb-2 text-sm' href="#">Discover</a>
         <img className='h-36' src="./images/divg2.svg" alt="error" />
      </div>

      <div className='w-3/4 m-auto bg-pink-50 rounded-xl p-3 ml-5 h-80'>
         <p className='font-bold w-52 pb-1 text-sm'>Right-Size your real estate portfolio and save millions of €€€</p>
         <p className='w-52 text-xs pb-3'>Remote work has disrupted office attendance and usage. How to adapt your real estate strategy and take advantage of it?</p>
         <a className='font-semibold pb-2 text-sm' href="#">Discover the use case</a>
         <img className='h-36' src="./images/divg3.svg" alt="error" />
      </div>

      <div className='w-4/4 m-auto bg-green-50 rounded-xl p-3 ml-5 h-80'>
         <p className='font-bold w-52 pb-7 text-sm'>Install and manage access control for my company</p>
         <p className='w-52 text-xs pb-3'>98% of employees perceive access control as a constraint, and 70% of organizations rely on a third party to manage their security.</p>
         <a className='font-semibold pb-2 text-sm' href="#">Discover our tips</a>
         <img className='h-36' src="./images/divg4.svg" alt="error" />
      </div>
      </div>
</div>


<div className='float-left bg-white w-full' >
   <h1 className=' text-3xl font-bold  ml-[45%]  pt-20'>Partners</h1>
   <div className='border-2 w-5 border-blue-700 rounded-full inline-block ml-[48%]'></div>
         <div className='p-4 bg-gray-200 mt-5 ml-44 mr-44 rounded-sm '>
               <div className='ml-[5%] flex bg-white w-fit rounded-md'>
                     <img className='h-36' src="./images/divh1.svg" alt="error" />
                     <img className='ml-4 h-36' src="./images/divh4.svg" alt="error" />
               </div>
         </div>
          <button className=" ml-[43%] outline-0 bg-gray-50 w-48 p-2 text-xs font-semibold   rounded-full shadow-md mt-12 mb-14">Become Partner</button>
</div>



<div id='blog' className='bg-blue-50 '>
          <h1 className=' text-3xl font-bold  ml-[45%]  pt-20 mt-10'>Our Blog</h1>
         <div className='border-2 w-5 border-blue-700 rounded-full inline-block ml-[48%] '></div>
    
       <div className=' ml-20'> 
          <div className='w-fit bg-white p-5 rounded-lg m-auto float-left shadow-lg '>
               <img className='h-60 m-auto' src="./images/divi1.svg" alt="error" /> 
               <p className=' flex text-xs float-left text-blue-500 mt-3'>#GTB</p>  
               <p className='float-right mt-3 text-xs'>20 juillet 2023</p>
               <p className='mt-8 font-medium'>Décret Tertaire : obligations & solutions possibles</p>
          </div> 
              <div className='float-left m-auto ml-8 w-fit bg-blue-50'>
                     <div className=' p-5 bg-white shadow-md '>
                     <img className='float-left m-auto w-28' src="./images/divi2.svg" alt="error" />
                     <p className='text-blue-500 '>#Energie</p>
                     <p className='w-96'>Lutter contre la consommation en veille des appareils informatiques</p>
                     </div>
                     <div className=' p-5 mt-3 bg-white shadow-md'>
                     <img className='float-left m-auto w-24' src="./images/divi3.svg" alt="error" />
                     <p className='text-blue-500 '>#Smart Office</p>
                     <p className='w-96'>Organiser ses équipes enflex-office</p>
                     </div>
                     <div className=' float-left mt-3 p-5 bg-white shadow-md '>
                     <img className='float-left m-auto w-28' src="./images/divi4.svg" alt="error" />
                     <p className='text-blue-500'>#Smart Cleaning</p>
                     <p className='w-96'>La propreté de mes locaux selon leur usage réel</p>
                     </div>
              </div>
      </div>  
       
            <button className="outline-0  bg-gray-50 w-48 p-2 text-xs font-semibold rounded-full shadow-md mt-96 mb-14 -ml-96 ">Discover</button> 
</div>

<div className='ml-7 '>
   
            <h1 className=' ml-96 text-center  font-bold text-[30px] w-[33%] mt-10 '>Keep in touch with Smart Building News</h1> 
            <div className='border-2 w-5 border-blue-700 rounded-full inline-block ml-[13%]'></div> 

            <div className='float-left mt-3 ml-6'>
               <h1 className='  text-left  font-bold text-lg w-60 mt-10 '>Subscribe to our newsletter to know more</h1> 
               <p className='font-medium'>Experts’ interviews · Tips · Podcasts</p> 
               <input className='shadow-md outline-gray-200 rounded-sm border-0 outline  '  type="text" name="input" id="input-1" /> 
               <button className="outline-0  bg-blue-800 w-48 p-2 text-xs font-semibold text-white rounded-full shadow-md  mb-2 ml-4">SUBSCRIBE</button> 
               <p className='text-sm mb-8'>No worries, you can unsubscribe at any moment.</p>
               
               <div className='float-left mb-20'>
               <a href="#" >< BsYoutube className='text-4xl' /></a>
               <p className='text-xs '>Podcast - Youtube</p></div>
               <div className='ml-32'>
               <a href="#" className='flex ' ><BsLinkedin className='text-4xl'/></a>
               <p className='text-xs'>Linkedin Page</p></div>
            </div>
  
             <div className=' flex '>
               <img className='ml-24 w-96 ' src="images/divj1.svg" alt="error" />
             </div>
</div>


<div className='bg-blue-800 text-white'>
         <div className='text-left ml-10 float-left mr-80'>
            <img className='pt-5 w-36' src="./images/divk.svg" alt="error" />
            <p className='w-40 text-xs'>R.C.S Amiens B 914 244 173 Atelier N <br />4 rue des indes noires Boves 80440</p>
         </div>

         <div className='pt-20'>
               <h1 className='text-2xl mb-5'>The Brain of Smart Buildings</h1>
                     <div className='float-left text-xs'>
                        <ul className='mr-28'>
                           <li className='font-semibold'>Resources</li>
                           <li>Use case</li>
                           <li>Guides</li>
                           <li>Articles</li>
                           <li>Podcast</li>
                        </ul>
                     </div>
                     
                        <div className='flex text-xs'>
                        <ul>
                           <li className='font-semibold'>Our solutions</li>
                           <li>BMS - BAS</li>
                           <li>Occupancy Analysis</li>
                           <li>Access Control</li>
                           <li>Smart Cleaning</li>
                           <li>Setting us a BOS</li>
                        </ul>
                        </div>

         </div>

         <div className='flex items-end pb-7'>
            <img className='w-32 -mb-8  ' src="./images/divl1.svg" alt="error" />
            <img className='w-16' src="./images/divl2.svg" alt="error" />
            <div className='flex justify-end ml-[35%]'>
            <ul className='flex  space-x-5 text-xs ' >
               <li>Mentions légales</li>
               <li>CG Partenaires</li>
               <li>CGV</li>
               <li>CGU</li>
               <li>Vie Privée</li>
               <li>Politique des cookies</li>
            </ul></div>
         </div>

</div>



</div>
   </>
  )
}
