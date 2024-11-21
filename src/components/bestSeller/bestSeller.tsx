export default function BestSeller() {
    const images= {
      image1: 'fg'
    }

    return(
    < div className=" h-100  bg-slate-100">
         <p className="text-4xl text-center pt-40 font-extrabold text-gray-900 dark:text-white">Our Best Seller</p>
         <div className="pt-10">
         <div className="h-80 p-10 flex gap-2 justify-center align-middle"> 
            <div className="w-1/4 h-34 shadow-md rounded-md bg-slate-200"></div>
            <div className="w-1/4 h-34 shadow-md rounded-md bg-slate-200"></div>
            <div className="w-1/4 h-34 shadow-md rounded-md bg-slate-200"></div>
            <div className="w-1/4 h-34 shadow-md rounded-md bg-slate-200"></div>
         </div>

         </div>
     </div>
     


    )
    
  }