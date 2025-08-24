"use client";
import Image from "next/image";
import Sidebar from "../../../components/adminComponents/Sidebar";
import logo from "../../../public/blog.avif"

export default function AdminLayout({ children }) {
  return (
    <>  
    <div className="flex">
       <Sidebar />
       <div className="flex flex-col w-full">
              <div className="flex items-center justify-between w-full py-3  max-h-16 px-12 border-b border-black">
                     <h3 className="font-medium text-lg ">Admin panel</h3>
                     <Image  src={logo} width={40} alt="" className="rounded-full w-12 h-12" />
              </div>
           <div className="flex justify-center items-center h-[70vh]">
           {children}
           </div>
       </div>
 
    </div>
  
    </>
  );
}
