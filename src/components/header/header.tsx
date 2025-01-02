'use client'
import React, { useState, useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
import Hamburger from 'hamburger-react'
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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
          <nav className="hidden md:flex space-x-10 text-black">
            <Link href="/about">About</Link>
            <Link href="/products">Product</Link>
            <Link href="/profile">Workspaces</Link>
            <Link href="/contact">Contacts</Link>
            

            <DropdownMenu>
  <DropdownMenuTrigger>
    <CgProfile size={'24'}/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
    <Link href="/about">Login</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href="/about">Sign Up</Link>

    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


            {/* <div className='flex space-x-2'>
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </div> */}
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
                 <Link href="/about ">
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-black p-3">About</p>
                </Link>
                 <Link href="/products">
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-black p-3">Product</p>
                </Link>
                 <Link href="/profile">
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-black p-3">Workspaces</p>
                 </Link>
                 <Link href="/contact">
                <p className="text-lg hover:bg-slate-100 rounded-md hover:text-black p-3">Contact</p>

                 </Link>
                
                {/* <p className="text-lg hover:bg-slate-100 rounded-md hover:text-black p-3">My Profile */}

                  
            <DropdownMenu>
  <DropdownMenuTrigger>
  <p className="text-lg hover:bg-slate-100 rounded-md hover:text-black p-3">My Profile</p>

    {/* <CgProfile size={'24'}/> */}
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
    <Link href="/about">Login</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href="/about">Sign Up</Link>

    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
                {/* </p> */}

              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
