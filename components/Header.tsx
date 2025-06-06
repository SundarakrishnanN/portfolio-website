"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, Computer, FileText } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#3182CE] hover:text-[#2C5282] transition-colors flex items-center space-x-2"
        >
          <Computer size={20} />
          <span>My Portfolio</span>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#4A5568] hover:text-[#3182CE] transition-colors"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-6 absolute lg:relative top-full left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50`}
        >
          <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 px-4 py-4 lg:p-0">
            {['Home', 'Achievements', 'Projects', 'Publications', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={handleLinkClick}
                    className="text-[#4A5568] hover:text-[#3182CE] transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.span>
                  </Link>
                </li>
              )
            )}
            {/* Icons Section */}
            <div className="flex items-center space-x-4 justify-center lg:space-x-6 mt-4 lg:mt-0">
              <li>
                <Link
                  href="https://www.linkedin.com/in/sundarakrishnan-n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A5568] hover:text-[#3182CE] transition-colors"
                  onClick={handleLinkClick}
                >
                  <Linkedin size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/SundarakrishnanN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A5568] hover:text-[#3182CE] transition-colors"
                  onClick={handleLinkClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/Sundarakrishnan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A5568] hover:text-[#3182CE] transition-colors"
                  onClick={handleLinkClick}
                >
                  <FileText size={20} />
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
