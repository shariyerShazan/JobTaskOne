"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import blog from "../public/blog.avif";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <div className='px-5 md:-x-12 lg:px-24 '>
      <div className='flex justify-between items-center py-4'>
        <Image src={blog} width={100}  height={80} alt='' className='scale-175 w-[80px] sm:w-auto bg-transparent object-cover object-bottom'/>
        
        <div className='flex gap-4'>
          {user ? (
            <>
              <Link href="/admin" className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-black border-1 shadow-[-7px_7px_0px_#000]">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-black border-1 shadow-[-7px_7px_0px_#000] hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-black border-1 shadow-[-7px_7px_0px_#000]">
              Login
            </Link>
          )}
        </div>
      </div>

      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest blog</h1>
        <p className='mt-10 max-w-[740px] mx-auto text-sm sm:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur officiis corporis repellat aperiam ab ipsam voluptatibus eveniet fuga incidunt!
        </p>
        <form action="" className='flex justify-between max-w-[500px] scale-75 mx-auto mt-10 border-black border shadow-[-7px_7px_0px_#000]'>
          <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none' />
          <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-700 active:text-white'>
            Subscribe
          </button>
        </form>  
      </div>
    </div>
  );
}

export default Header;
