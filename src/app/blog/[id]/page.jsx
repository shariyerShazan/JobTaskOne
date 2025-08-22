"use client"
import React, { useState } from 'react'
import blogData from '../../../../Assets/data'
import { useParams } from 'next/navigation'
import blog from "../../../../public/blog.avif"
import Image from 'next/image'
import Footer from '../../../../component/Footer'
import Link from 'next/link'

const page = () => {
  const {id }= useParams()
    const data = blogData.find((d)=> (d.id.toString() === id))

  return (
    <div >
          <div >
       <div className='bg-gray-200'>
       <div className='w-[90%] mx-auto'>
         <div className='flex justify-between items-center '>
                 <Link href={"/"}>
                 <Image src={blog} width={100} alt='' className='scale-175 mix-blend-multiply w-[80px] sm:w-auto bg-transparent object-cover object-bottom'/>
                 </Link>
                     <button className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-black border-1 shadow-[-7px_7px_0px_#000] ">
                        Get started
                     </button>
                 </div>
          </div>
                 <div className='mt-12 h-[50vh]'>
                     <h2 className='text-center text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data?.title}</h2>
                     <Image src={data?.authorImage} alt='' width={100} height={100} className='mx-auto mt-12 border border-white rounded-full'/>
                     <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto text-center font-bold'>{data.author}</p>
                 </div>
       </div>
        
                <div className='mx-5 max-w-[800px] md:mx-auto mt-[-220px] mb-10 '>
                        <Image src={data?.image} alt='' width={1280} height={720} className='border-4 rounded-lg object-cover border-white'/>
                        <p className='mt-4'>
                          {data.description}
                        </p>
                </div>
          </div>
                <Footer />
    </div>
  )
}

export default page
