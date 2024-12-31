'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github,FileText } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Contact() {
  return (
    <motion.div 
      className="space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8 text-[#3182CE]"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        Contact Me
      </motion.h1>
      <motion.div 
        className="bg-white rounded-lg shadow-md overflow-hidden p-8"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <p className="text-[#4A5568] mb-6">
          I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in my work. 
          Feel free to reach out through any of the following channels:
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="text-[#3182CE] mr-4" size={24} />
            <Link href="mailto:sundar050804@gmail.com" className="text-[#3182CE] hover:underline">
              sundar050804@gmail.com
            </Link>
          </div>
          <div className="flex items-center">
            <Linkedin className="text-[#3182CE] mr-4" size={24} />
            <Link href="https://www.linkedin.com/in/sundarakrishnan-n" target="_blank" rel="noopener noreferrer" className="text-[#3182CE] hover:underline">
              LinkedIn Profile
            </Link>
          </div>
          <div className="flex items-center">
          <Github className="text-[#3182CE] mr-4" size={24} />
            <Link href="https://github.com/SundarakrishnanN/" target="_blank" rel="noopener noreferrer" className="text-[#3182CE] hover:underline">
              GitHub Profile
            </Link>
          </div>
          <div className="flex items-center">
            <FileText className="text-[#3182CE] mr-4" size={24} />
            <Link href="/Sundarakrishnan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#3182CE] hover:underline">
              Download Resume
            </Link>
          </div>
        </div>
      </motion.div>
     
    </motion.div>
  )
}

