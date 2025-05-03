'use client';

import { useState } from 'react';
import Link from 'next/link';
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 z-50 pb-3 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar content */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center mr-1">
                <span className="text-blue-500 font-bold">Rs</span>
              </div>
              <span className="text-white text-xl font-bold">Trade</span>
            </Link>
          </div>

          {/* Search Bar - always visible */}
          <div className="hidden md:flex flex-1 justify-center mx-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search product ..."
                className="w-full px-4 py-2 rounded-md focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-gray-100 border-l rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side elements */}
          <div className="flex items-center space-x-4">
            {/* Shopping cart */}
            <Link href="/cart" className="relative text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-white text-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Link>

            {/* Login button */}
            <Link href="/accounts/signin" className="text-white hover:text-blue-100">
              Log In
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-blue-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Category links - desktop */}
        <div className="hidden md:flex justify-start space-x-8 py-2 text-white">
          <div className="relative group">
            <Link href="/products" className="flex items-center hover:text-blue-100">
              All products <span className="ml-1">▼</span>
            </Link>
          </div>
          <Link href="/home-appliances" className="hover:text-blue-100">
            Home appliances
          </Link>
          <Link href="/audio-video" className="hover:text-blue-100">
            Audio & video
          </Link>
          <Link href="/refrigerator" className="hover:text-blue-100">
            Refrigerator
          </Link>
          <Link href="/new-arrivals" className="hover:text-blue-100">
            New arrivals
          </Link>
          <Link href="/todays-deal" className="hover:text-blue-100">
            Today's deal
          </Link>
          <Link href="/gift-cards" className="hover:text-blue-100">
            Gift cards
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-blue-600 space-y-2 px-2">
            {/* Mobile search bar */}
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search product ..."
                className="w-full px-4 py-2 rounded-md focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-3 bg-gray-100 border-l rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <Link href="/products" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              All products
            </Link>
            <Link href="/home-appliances" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              Home appliances
            </Link>
            <Link href="/audio-video" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              Audio & video
            </Link>
            <Link href="/refrigerator" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              Refrigerator
            </Link>
            <Link href="/new-arrivals" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              New arrivals
            </Link>
            <Link href="/todays-deal" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              Today's deal
            </Link>
            <Link href="/gift-cards" className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md">
              Gift cards
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};