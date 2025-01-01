'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'GateKeeper',
    description: 'Developed an approval system with over 60 regular users for IEEE-RVCE to ease event planning and permissions using SpringBoot for backend and Next.Js for frontend. Resulted in a production-ready product that utilized MySQL database accessed using JPA, and is hosted on Oracle Cloud using Kubernetes.',
    image: '/gatekeeper.png',
    link: 'https://github.com/IEEE-RVCE/GateKeeper'
  },
  {
    id: 2,
    title: ' CSITSS',
    description: ' Led the development of the CSITSS-2024 website for the IEEE Conference at RVCE using Next.js, deployed on Vercel with Cloudflare integration.The site received over 100,000+ views globally, providing a seamless experience for authors all over the world.',
    image: '/csitss.png',
    link: 'https://csitss.ieee-rvce.org/'
  },
  {
    id: 3,
    title: 'TrafficMonitor',
    description: 'Developed a real-time solution for predicting vehicle turn patterns using a custom YOLOv8 object tracker and forecasted traffic 30 minutes ahead with Auto ARIMA on challenging Indian roads.Secured first place in Phase 1 of the Bengaluru Mobility Challenge held by IISc, competing against 400+ teams.',
    image: '/bengaluruMobilityChallenge.jpeg',
    link: 'https://github.com/SundarakrishnanN/Phase1-BMC'
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Projects() {
  return (
    <motion.div 
      className="space-y-12 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8 text-[#3182CE] "
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        Projects
      </motion.h1>
      {projects.map((project, index) => (
        <motion.div 
          key={project.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: index * 0.1 }}
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={300} 
                className="object-cover w-[400px] h-[300px]"

              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-[#3182CE] font-semibold">
                Project {project.id}
              </div>
              <Link href={project.link} className="block mt-1 text-lg leading-tight font-medium text-[#1A202C] hover:text-[#3182CE] transition-colors">
                {project.title}
              </Link>
              <p className="mt-2 text-[#4A5568]">
                {project.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

