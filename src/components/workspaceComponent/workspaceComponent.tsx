import React from "react";

export default function WorkspaceComponent () {
    return(
        <div className="w-full h-40 p-32 bg-pink-700 shadow-lg">
            <div className="flex w-96 justify-between">
                <div className="text-center p-4 text-gray-50">
                   <h2>Transform your desk setup with beautiful tech accessories </h2>
                   <p>Get all fancy aesthetics to make your space more inspirational for work. </p>
                </div>
               <div>
               <img src="/image/desk-setup-aesthetic.jpg" 
                width={200} 
                height={200}
               alt="" />

               </div>

            </div>

        </div>
    )
}