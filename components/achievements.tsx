"use client"

import { motion } from "framer-motion"
import { Brain, Cloud, Trophy } from 'lucide-react'
import { GlassmorphicCard } from "@/components/glassmorphic-card"

const achievements = [
  {
    title: "Level 3 GenAI: Prompt Engineering in THE ARCADE",
    year: "2023",
    description: "Advanced skills in designing and optimizing AI prompts for diverse applications.",
    icon: Brain,
  },
  {
    title: "Google Cloud Computing Foundations",
    year: "2023",
    description: "Achieved Silver League (15,635 points) and earned 8 badges in Google Cloud technologies.",
    icon: Cloud,
  },
  {
    title: "Smart India Hackathon (SIH) Intra-college Winner",
    year: "October 2023",
    description: "Won first place in the intra-college Smart India Hackathon with innovative solutions.",
    icon: Trophy,
  },
]

export function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {achievements.map((achievement, index) => {
        const IconComponent = achievement.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassmorphicCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <div className="text-zinc-400 text-sm">{achievement.year}</div>
                </div>
              </div>
              <p className="text-zinc-300">{achievement.description}</p>
            </GlassmorphicCard>
          </motion.div>
        )
      })}
    </div>
  )
}
