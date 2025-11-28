'use client';

import Image from 'next/image'; // Import Image for optimized images
import { useState, useEffect } from 'react'; // Import hooks for state and effects

export default function Hero() {
  // State for typewriter text
  const [displayText, setDisplayText] = useState(''); // Current displayed text
  const fullText = 'Discover India'; // Full text to type

  // Continuous typewriter effect
  useEffect(() => {
    let index = 0; // Current character index
    let isDeleting = false; // Flag for deleting
    const timer = setInterval(() => { // Set interval for typing/erasing
      if (!isDeleting) { // If typing
        if (index < fullText.length) { // If not at end
          setDisplayText(fullText.slice(0, index + 1)); // Add next character
          index++; // Increment index
        } else {
          isDeleting = true; // Start deleting
          setTimeout(() => {}, 1000); // Pause before deleting
        }
      } else { // If deleting
        if (index > 0) { // If not empty
          setDisplayText(fullText.slice(0, index - 1)); // Remove last character
          index--; // Decrement index
        } else {
          isDeleting = false; // Start typing again
          setTimeout(() => {}, 500); // Pause before typing
        }
      }
    }, 100); // Speed: 100ms per character

    return () => clearInterval(timer); // Cleanup
  }, []); // Run once on mount

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId); // Get element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-lg">
      {/* Hero section with background image */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt="Indian Travel Scenery" // Alt text
          fill // Fill container
          className="object-cover w-full h-full rounded-lg" // Cover and rounded
          priority // Load priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-center md:text-left">
          {/* Typewriter heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {displayText} {/* Display typed text */}
            <span className="animate-pulse text-blue-400">|</span> {/* Cursor */}
          </h1>
          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-10">
            Plan your dream vacation with personalized itineraries and unforgettable experiences.
          </p>
          {/* CTA button */}
          <button
            onClick={() => scrollToSection('destinations')} // Scroll to destinations
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}

