'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Briefcase, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <motion.div 
      className="space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section className="text-center space-y-4" {...fadeInUp}>
        <h1 className="text-5xl font-bold mb-4 text-[#3182CE]">Sundarakrishnan N</h1>
        <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
          Passionate Web Developer & ML Researcher with experience in Springboot, Python, Next.js and Computer. 
          Committed to creating innovative solutions and contributing to the tech community.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image 
            src="/sundar2.jpg" 
            alt="Sundar" 
            width={200} 
            height={200} 
            className="rounded-full mx-auto mt-8 border-4 border-[#3182CE]"
            
          />
        </motion.div>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
        initial="initial"
        animate="animate"
      >
        {[
          { href: "/achievements", icon: Award, title: "Achievements", description: "Discover my professional accomplishments and awards" },
          { href: "/projects", icon: Briefcase, title: "Projects", description: "Explore the various projects I've worked on" },
          { href: "/publications", icon: BookOpen, title: "Publications", description: "Read about my research and published works" }
        ].map((item, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Link href={item.href} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center group h-full">
              <item.icon className="w-12 h-12 text-[#3182CE] mb-4 group-hover:text-[#2C5282] transition-colors" />
              <h2 className="text-2xl font-bold mb-2 text-[#1A202C]">{item.title}</h2>
              <p className="text-[#4A5568] mb-4 flex-grow">{item.description}</p>
              <ArrowRight className="text-[#3182CE] group-hover:translate-x-1 transition-transform mt-auto" />
            </Link>
          </motion.div>
        ))}
      </motion.section>

      <motion.section 
        className="bg-white p-8 rounded-lg shadow-md"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#3182CE]">About Me</h2>
        <p className="text-[#4A5568] mb-4">
         With a deep rooted interest towards Computer Science and Software Development, I have developed various real life applications being used as a part of my tenure as the Web Development Lead at IEEE-RVCE. Everyday to strive towards making a change with my software development skills.
        </p>
        <p className="text-[#4A5568]">
        Road Safety and Traffic Management Systems is one of my key interests, and I have worked on a variety of impactful Road Safety and Traffic Management Systems using Computer Vision and AI.
        </p>
      </motion.section>
    </motion.div>
  )
}

