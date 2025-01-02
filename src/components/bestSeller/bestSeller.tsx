import React from "react"
import Image from "next/image";
// import image from "ecommerce1.jpg"


// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: string;

// }
export default function BestSeller() {
  type Product = {
    id: number;
    name: string;
    image: string;
    price: string;
  }
  

    const products: Product[]= [
      {
      id: 1,
      name: "ecommerce1",
      image: '/image/ecommerce1.jpg',
      price: "$50",
    },
    {
      id: 1,
      name: "Product 1",
      image: '/image/ecommerce2.jpg',
      price: "$50",
    },
    {
      id: 1,
      name: "Product 1",
      image: '/image/ecommerce3.jpg',
      price: "$50",
    },
    {
      id: 1,
      name: "Product 1",
      image: '/image/ecommerce1.jpg',
      price: "$50",
    }
  ]
    // const ProductGrid: React.FC = () => {

    return(
    < div className=" h-100  p-4 bg-slate-100">
         <h2 className="text-4xl text-center pt-40 font-extrabold text-gray-900 dark:text-white">Our Best Seller</h2>
         {/* <div className="pt-10"> */}
         <div className="grid lg:grid sm:grid-cols-4 gap-4 pt-10">
          {products.map((product) => (
            <div 
            key={product.id} className=" w-full h-34 shadow-md rounded-md bg-slate-200 border p-4 flex flex-col items-center">
              <img
              src={product.image} 
              alt={product.name} 
              width={200} // Adjust width and height as needed
              height={200}
              className="mb-4"/>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-800">{product.price}</p>
            </div>
          ))}

         </div>
         {/* <div className="h-80 p-10 flex gap-2 justify-center align-middle"> 
            <div className="w-1/4 h-34 shadow-md rounded-md bg-slate-200"></div>
            <div className="w-1/4 h-34 shadow-md rounded-md bg-slate-200"></div>
            <div className="w-1/4 h-34 shadow-md rounded-md bg-slate-200"></div>
            <div className="w-1/4 h-34 shadow-md rounded-md bg-slate-200"></div>
         </div>

         </div> */}
     </div>
    


    )
    
  }

// }