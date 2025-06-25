import React from 'react';

const HeroPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.ytimg.com/vi/Xxcfg9wpZdU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBe1kHRBMFp9_w9QV--EV-UZwPhUg"
          alt="Workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Hero Content (Mobile) */}
      <div className="relative z-50 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-3xl font-bold leading-tight mb-4">
          Say No To Boring WorkSpace
        </h1>
        <p className="text-sm text-gray-300 dark:text-gray-400">
          We Have The Perfect Setup for your Work Space Aesthetics. Look out for our amazing products.
        </p>
      </div>
    </div>
  );
};

export default HeroPage;