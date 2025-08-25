"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import blog from "../public/blog.avif";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className='px-5 md:px-12 lg:px-24'>
      <div className='flex justify-between items-center py-4'>
        <Image 
          src={blog} 
          width={100}  
          height={80} 
          alt='logo' 
          className='scale-175 w-[80px] sm:w-auto bg-transparent object-cover object-bottom'
        />
        
        <div className='flex gap-4'>
          {user ? (
            <>
              <Link href="/admin" className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000] hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]">
              Login
            </Link>
          )}
        </div>
      </div>

      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest blog</h1>
        <p className='mt-10 max-w-[740px] mx-auto text-sm sm:text-base'>
        A blog (a truncation of "weblog")[1] is an informational website consisting of discrete, often informal diary-style text entries also known as posts. Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page
        </p>
        <form action="" className='flex justify-between max-w-[500px] scale-75 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000]'>
          <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none' />
          <button type='submit' className='border border-black py-4 px-4 sm:px-8 active:bg-gray-700 active:text-white'>
            Subscribe
          </button>
        </form>  
      </div>
    </div>
  );
}

export default Header;
