'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after click
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Larger size */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="TripMitra Logo"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-blue-600">TripMitra</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('features')}
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Destinations
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('features')}
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
