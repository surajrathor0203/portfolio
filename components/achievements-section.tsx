"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Cloud, Trophy } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Level 3 GenAI: Prompt Engineering in THE ARCADE",
      year: "2023",
      description: "Advanced skills in designing and optimizing AI prompts for diverse applications.",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Google Cloud Computing Foundations",
      year: "2023",
      description: "Achieved Silver League (15,635 points) and earned 8 badges in Google Cloud technologies.",
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Smart India Hackathon (SIH) Intra-college Winner",
      year: "October 2023",
      description: "Won first place in the intra-college Smart India Hackathon with innovative solutions.",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Achievements</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="mt-1">{achievement.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.year}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
