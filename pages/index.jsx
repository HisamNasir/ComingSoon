import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import img from '../assets/hh.jpg'
import img2 from '../assets/user.jpg'
import { HiArrowNarrowRight } from '@heroicons/react/24/outline';
export default function Home() {
  return (
    <div>
  
      <main className='flex flex-col md:flex-row  w-full h-screen '>

{/* side bar */}
       
        <div className=' p-4h-screen w-screen space-y-2 grid grid-rows-3  gap-2 bg-white z-index: 2 h-screen md:w-2/5 lg:w-3/5 md:p-5'>
        <div className='  lg:m-2   flex h-20 w-20 row-span-1'>
              <Image alt='' src={img2} className="flex relative  rounded-full"></Image>
        </div>

        <div className='z-10  '>
                 
        
        <div className=' row-span-1'>
        <div >
              <div className=" text-5xl md:text-6xl ml-2 md:ml-5 xl:ml-16 font-['Playfair+Display+SC'] ">
                {"COMING SOON"}
                  <div className=' flex mt-7 justify-start text-xl md:text-2xl    text-neutral-400 font-[Poppins]'>
                    {"Follow us for update now!"}
                  </div>
              </div>
              <div className='  absolute grid grid-cols-10 mt-5 border-l-4 border-black bg-yellow-300 text-gray-900 leading-tight focus:outline-none my-5 md:ml-5 xl:ml-16  ' >
                <div className=' invisible  col-span-1 lg:visible lg:font-[Poppins] lg:col-span-3 md:px-4 sm:px-0 md:py-10'>
                <span className='hidden lg:block'> Subscribe Now: </span>
                </div>
                  <input className="font-[Poppins] focus:outline-none col-span-8 flex md:w-full lg:col-span-6 lg:py-5  bg-yellow-300 text-gray-900 " id="username" type="text" placeholder="Username"/>
                <button className=' flex lg:w-full '>
                  <i className='lg:py-10 clo-span-1flex w-full justify-center py-6 lg:hover:pl-5 md:py-p'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>

                  </i>
                </button>
              </div>
          </div>
        </div>
        
        </div>

<div className='hidden md:block'>
<div className=' absolute bottom-0 m-10  row-span-1'>
          <div className='flex font-[Poppins]  text-neutral-500 stroke-neutral-400'>
              <span className='flex justify-center my-2 mx-2 '>
              {"FOLLOW US"}
              </span>
              <a className='mx-2'/>
            <div className='transition duration-500 scale-75 group p-2 border rounded-full hover:bg-black'>
            <svg className='group-hover:invert ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>

             <div className='transition duration-500 scale-75 group p-2 border rounded-full  hover:bg-black'>
             <svg className='group-hover:invert p-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
             </div>

             <div className='transition duration-500 scale-75 group  p-2 border rounded-full hover:bg-black'>
              <svg className='group-hover:invert p-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          
              </div>
          
          </div>
       </div>
</div>
        </div>
   
{/* Sidebar end */}


{/* Bottom links for mobile Display */}
<div className='block md:hidden  '>
          <div className='flex font-[Poppins]  text-neutral-500 stroke-neutral-400'>
              <span className='flex justify-center my-2 mx-2 '>
              {"FOLLOW US"}
              </span>
              <a className='mx-2'/>
            <div className='transition duration-500 scale-75 group p-2 border rounded-full hover:bg-black'>
            <svg className='group-hover:invert ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>

             <div className='transition duration-500 scale-75 group p-2 border rounded-full  hover:bg-black'>
             <svg className='group-hover:invert p-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
             </div>

             <div className='transition duration-500 scale-75 group  p-2 border rounded-full hover:bg-black'>
              <svg className='group-hover:invert p-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          
              </div>
          
          </div>
       </div>
{/* Bottom links for mobile Display end*/}


{/* Right Wallpaper */}
        <div className='w-full h-1/4 flex md:w-screen md:h-screen  z-0'>
            <div className="relative h-full w-full">
                <Image className="object-cover" src={img} layout="fill" alt="Side Image" />
            </div>
        </div>
{/* Right Wallpaper end */}
      </main>
    </div>
  )
}
