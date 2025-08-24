import Image from 'next/image'
import React from 'react'
import blog from "../public/blog.avif"

const Header = () => {
  return (
    <div className='px-5 md:-x-12 lg:px-24 '>
       <div className='flex justify-between items-center'>
                           <Image src={blog} width={100} alt='' className='scale-175 w-[80px] sm:w-auto bg-transparent object-cover object-bottom'/>
                            <button className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-black border-1 shadow-[-7px_7px_0px_#000] ">
                               Get started
                            </button>
                        </div>
       <div className='text-center my-8 '>
        <h1 className='text-3xl sm:text-5xl font-medium '>Latest blog</h1>
        <p className='mt-10 max-w-[740px] mx-auto text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur officiis corporis repellat aperiam ab ipsam voluptatibus eveniet fuga incidunt!</p>
        <form action="" className='flex justify-between max-w-[500px] scale-75 mx-auto mt-10 border-black border shadow-[-7px_7px_0px_#000]'>
            <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none ' />
            <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-700 active:text-white '>Subscribe</button>
        </form>  
       </div> 
    </div>
  )
}

export default Header
