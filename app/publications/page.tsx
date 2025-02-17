'use client'

import { BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const publications = [
    {   
    id: 1, 
    title: 'Vehicle Turn Pattern Counting and Short Term Forecasting Using Deep Learning for Urban Traffic Management System', 
    journal: 'IEEE Access', 
    year: 2024, 
    link: 'https://ieeexplore.ieee.org/document/10830516', 
    description: 'Published in IEEE Open Access (Q1 Journal).' 
  },
  { 
    id: 2, 
    title: 'Vehicle Mirror Detection', 
    conference: '2024 International Conference on Computer Communication and Informatics', 
    year: 2024, 
    link: '', 
    description: 'A research project that uses YOLOv8 to detect rear view mirrors of vehicles real-time. Led to acceptance for publication at ICCCI IEEE Conference 2024.' 
  },


]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Publications() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8 text-[#3182CE] pt-20"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        Publications
      </motion.h1>
      <div className="space-y-4">
        {publications.map((publication, index) => (
          <motion.div 
            key={publication.id} 
            className="bg-white p-4 rounded-lg shadow-md flex items-start"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.1 }}
          >
            <BookOpen className="text-black-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[#3182CE]">
                <a href={publication.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {publication.title}
                </a>
              </h3>
              <p className="text-sm text-[#3182CE]-600 mb-1">
                {publication.journal || publication.conference}, {publication.year}
              </p>
              <p className="text-sm text-black-500">
                {publication.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
