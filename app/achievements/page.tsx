'use client'

import { Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const achievements = [
  { id: 1, title: 'Winner of The Bengaluru Mobility Challenge (Phase 1)', description: 'Created a scalable vehicle turn pattern counting and forecasting framework suited for Indian roads leading to a prize money of INR 2.5 lakhs' },
  { id: 2, title: 'Special Recognition Award in The Bengaluru Mobility Challenge (Phase 2)', description: 'Developed a robust vehicle re-identification model tested across Bengaluru Roads leading to a special recognition award of INR 25,000' },
  { id: 3, title: 'IEEE YESIST12 Finalist', description: 'Was a finalist amongst 40+ participating nations in the International Sustainable Project Competition held in Tunisia' },
  { id: 4, title: 'Samsung Prism Intern', description: 'Currently working as a PRISM Project Intern at Samsung Research Institute on a cinemographic animation.' },
  { id: 5, title: 'Web Development Lead at IEEE-RVCE', description: 'Lead the web development team at IEEE-RVCE in the year 2024 and successfully launched and managed high scale websites' },
  { id: 6, title: 'Machine Learning Lead', description: 'Currently leading a Machine Learning Team of 30+ people at Astra Robotics working on various Computer Vision tasks for Robotic Applications' },
]


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Achievements() {
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
        Achievements
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div 
            key={achievement.id} 
            className="bg-white p-4 rounded-lg shadow-md flex items-start"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.1 }}
          >
            <Trophy className="text-[#3182CE]-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[#3182CE]-700">{achievement.title}</h3>
              <p className="text-sm text-black-600">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

