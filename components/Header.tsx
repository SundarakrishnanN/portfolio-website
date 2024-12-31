"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin,Computer, Mail, FileText } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#3182CE] hover:text-[#2C5282] transition-colors">
            <Computer size={20} />
          </Link>
          <nav>
            <ul className="flex space-x-6 items-center">
              {['Home', 'Achievements', 'Projects', 'Publications', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[#4A5568] hover:text-[#3182CE] transition-colors">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="https://www.linkedin.com/in/sundarakrishnan-n/" target="_blank" rel="noopener noreferrer" className="text-[#4A5568] hover:text-[#3182CE] transition-colors">
                  <Linkedin size={20} />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/SundarakrishnanN/" target="_blank" rel="noopener noreferrer" className="text-[#4A5568] hover:text-[#3182CE] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </Link>
              </li>
              <li>
                <Link href="/Sundarakrishnan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#4A5568] hover:text-[#3182CE] transition-colors">
                  <FileText size={20} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

