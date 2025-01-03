import React from "react";

export default function WorkspaceComponent () {
    return(
        <div className="w-full h-40 p-32 bg-pink-700 shadow-lg">
            <div className="gap-4 mx-auto w-4/5 grid grid-cols-2 justify-between">
                <div className="text-center p-4 text-gray-50">
                   <h2 className="text-lg sm:text-sm">Transform your desk setup with beautiful tech accessories </h2>
                   <p className="text-lg sm:text-sm">Get all fancy aesthetics to make your space more inspirational for work. </p>
                </div>
               <div className="">
               <img src="/image/battlestation-desk-removebg.png" 
               
               alt="" />

               </div>

            </div>

        </div>
    )
}