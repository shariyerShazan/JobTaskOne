"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Footer from '../../../../components/Footer';
import blogPlaceholder from "../../../../public/blog.avif";

const Page = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/blog"); 
        if (res.data.success) {
          setBlogData(res.data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Client-side: find blog after data is fetched
  const data = blogData.find((d) => d._id === id);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center mt-20">Blog not found</div>;
  }

  return (
    <div>
      {/* Header Section */}
      <div className='bg-gray-200'>
        <div className='w-[90%] mx-auto'>
          <div className='flex justify-between items-center py-4'>
            <Link href={"/"}>
              <Image 
                src={blogPlaceholder} 
                width={100} 
                alt='Logo'
                className='scale-175 mix-blend-multiply w-[80px] sm:w-auto object-cover object-bottom bg-transparent'
              />
            </Link>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]">
              Get started
            </button>
          </div>
        </div>

        {/* Blog Title & Author */}
        <div className='pt-12 pb-64 flex flex-col items-center justify-center'>
          <h2 className='text-center text-2xl sm:text-5xl font-semibold max-w-[700px]'>
            {data.title}
          </h2>
          <Image 
            src={data.authorImage} 
            alt={data.author} 
            width={100} 
            height={100} 
            className='mx-auto mt-12 border border-white rounded-full object-cover'
          />
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto text-center font-bold'>
            {data.author}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-250px] mb-10'>
        <Image 
          src={data.image} 
          alt={data.title} 
          width={1280} 
          height={720} 
          className='border-4 rounded-lg object-cover border-white'
        />
        <p className='mt-4 text-gray-700 text-lg'>{data.description}</p>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
