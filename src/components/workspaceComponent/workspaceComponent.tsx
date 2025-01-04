import React from "react";
import Link from "next/link";
export default function WorkspaceComponent () {
    return(
        <div className=" bg-slate-300">
        <section className="bg-pink-600 px-6 py-12 md:py-24 mx-4 md:mx-20 flex flex-col md:flex-row items-center text-white rounded-lg">
        <div className="relative w-full md:w-1/2 h-80">
          <img
            src="/image/battlestation-desk-removebg.png"
            alt="Workspace Accessories"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl font-bold uppercase">Transform your desk designs with beautiful tech accessories</h1>
          <p className="mt-4 text-lg">
          Get all fancy aesthetics to make your space more inspirational for work.
           
          </p>
          <Link
            href="/products/firstspeaker"
            className="inline-block mt-6 py-3 px-8 bg-transparent border border-white text-white uppercase text-sm font-bold rounded-lg transition-colors hover:bg-black hover:text-white"
          >
            Book Designs
          </Link>
        </div>
         {/* <div className="relative w-full md:w-1/2 h-80">
             <div className="gap-4 mx-auto w-4/5 grid grid-cols-2 justify-between">
                <div className="text-center p-4 text-gray-50">
                   <h2 className="text-lg sm:text-sm">Transform your desk setup with beautiful tech accessories </h2>
                   <p className="text-lg sm:text-sm">Get all fancy aesthetics to make your space more inspirational for work. </p>
                </div>
               <div className="">
               <img src="/image/battlestation-desk-removebg.png" 
               
               alt="" />

               </div> */}

            {/* </div> */}
     </section>
        </div>
    )
}