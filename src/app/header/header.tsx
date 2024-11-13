'use client'
import React, { useState, useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
import Hamburger from 'hamburger-react'
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  
  // Detect scrolling for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer div to prevent content jump when the header is fixed */}
      <div className="h-18"></div>

      {/* Header with dynamic class based on scroll */}
      <div className={`w-full fixed top-0 left-0 z-50 transition-all ${scrolled ? 'bg-transparent shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="bg-white flex space-x-10 p-2 justify-around items-center">
          <div className='p-4 '>
            <h1>TechOasis</h1>
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex space-x-10 text-charcoal">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Product</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contacts</Link>

            <div className='flex space-x-2'>
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </div>
          </nav>

          {/* Search bar */}
          <div className="flex rounded-md border-2 border-gray-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
            <input 
              type="email" 
              placeholder="Search Something..." 
              className="w-full outline-none bg-transparent text-charcoal text-sm px-4 py-3"
            />
            <div className="flex items-center justify-center bg-white px-5 border-1">
              <IoIosSearch size={24} className='w-4  text-charcoal' />
            </div>
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className='md:hidden'>
            <Hamburger size={18} toggled={isOpen} toggle={setIsOpen} />

            {/* Mobile menu */}
            {isOpen && (
              <div className="absolute right-0 w-screen text-center mt-4 space-y-2 text-charcoal bg-slate-200">
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-charcoal p-3">Home</p>
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-charcoal p-3">About</p>
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-charcoal p-3">Product</p>
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-charcoal p-3">Shop</p>
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-charcoal p-3">Contact</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
