import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { IoMdArrowForward } from "react-icons/io";

const BlogItem = ({item}) => {
    const { id, image , category , title , description} = item
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000] transition-all duration-500'>
       <Link href={`/blog/${id}`} >
       <Image  src={image} alt='' width={400} height={400} className='border-b h-42 border-black'/>
       </Link>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm text-gray-700 tracking-tight'>{description}</p>
            <Link href={`/blog/${id}`} className='flex items-center gap-2 py-2 font-semibold text-center'>
                Read More <IoMdArrowForward />
            </Link>
        </div>
    </div>
  )
}

export default BlogItem
