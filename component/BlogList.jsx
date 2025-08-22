import React from 'react'

const BlogList = () => {
  return (
    <div>
         <div className='flex justify-center gap-6 my-10 '>
              <button className='bg-black text-white px-4 py-1 rounded-sm'>All</button>
              <button>Technology</button>
              <button>Startup</button>
              <button>Lifestyle</button>
         </div>
    </div>
  )
}

export default BlogList
