import Image from 'next/image'
import React from 'react'

import { IoMdArrowForward } from "react-icons/io";

const BlogItem = ({image , category , title , description}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000] transition-all duration-500'>
        <Image  src={image} alt='' width={400} height={400} className='border-b border-black'/>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm text-gray-700 tracking-tight'>{description}</p>
            <div className='flex items-center gap-2 py-2 font-semibold text-center'>
                Read More <IoMdArrowForward />
            </div>
        </div>
    </div>
  )
}

export default BlogItem
