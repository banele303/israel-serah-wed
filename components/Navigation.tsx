'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={cn(
        'fixed w-full z-50 transition-colors duration-300',
        isScrolled ? 'bg-white backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className={cn('text-xl font-bold', isScrolled ? 'text-gray-800' : 'text-white')}>
            Wedding
          </h1>
          <button
            onClick={toggleMenu}
            className={cn(
              'md:hidden transition duration-300',
              isScrolled ? 'text-gray-800 hover:text-pearl' : 'text-white'
            )}
          >
            <Menu size={24} />
          </button>
        </div>
        <ul
          className={cn(
            'flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-6 md:mt-0 mt-4',
            {
              hidden: !isMenuOpen,
              block: isMenuOpen,
            },
            'bg-white md:bg-transparent md:shadow-none shadow-md md:rounded-none rounded-lg p-4 md:p-0'
          )}
        >
          <li>
            <Link href="#home" className="text-gray-800 hover:text-pearl transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#our-story" className="text-gray-800 hover:text-pearl transition duration-300">
              Our Story
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="text-gray-800 hover:text-pearl transition duration-300">
              Gallery
            </Link>
          </li>
          
          <li>
            <Link href="#schedule" className="text-gray-800 hover:text-pearl transition duration-300">
              Schedule
            </Link>
          </li>
          <li>
            <Link href="#venue" className="text-gray-800 hover:text-pearl transition duration-300">
              Venue
            </Link>
          </li>
          
          <li>
            <Link href="#rsvp" className="text-gray-800 hover:text-pearl transition duration-300">
              RSVP
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
