// import React from 'react'
// // import Image from 'next/image'


// const HeroPage = () => {
//   return (
//     <div className='relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden'>
//       <div className='absolute inset-0'>
//       <img src= 'https://i.ytimg.com/vi/Xxcfg9wpZdU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBe1kHRBMFp9_w9QV--EV-UZwPhUg' className='w-full h-full ' alt="" />
//       <div className='absolute inset-0 bg-black opacity-50'></div>
//       </div>

//       <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
//       <h1 className='lg:text-6xl font-bold md:text-4xl sm:text-4xl  leading-tight mb-4 dark:text-white'>Say No To Boring WorkSpace</h1>
//       <p className='text-lg text-gray-300 mb-8 sm:text-sm dark:text-gray-400'> We Have The Perfect Setup for your Work Space Aesthetics. Look out for our amazing products.</p>
     
//       </div>
//     </div>
//   )
// }

// export default HeroPage

import React from 'react';
import Image from 'next/image';


const HeroPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      {/* Prevent Horizontal Scroll */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
            src="https://i.ytimg.com/vi/Xxcfg9wpZdU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBe1kHRBMFp9_w9QV--EV-UZwPhUg"
            alt="Workspace"
            fill
            className="object-cover"
            priority
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Hero Content with Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center animate-fade-in">
        <h1 className="text-3xl font-bold leading-tight mb-4">
          Say No To Boring WorkSpace
        </h1>
        <p className="text-sm text-gray-300 mb-6">
          We have the perfect setup for your work space aesthetics. Look out for our amazing products.
        </p>
        <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
