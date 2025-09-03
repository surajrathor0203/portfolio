"use client"

import { motion } from "framer-motion"
import { Code2, Users, Award, Coffee } from "lucide-react"

const stats = [
  {
    icon: Code2,
    value: "6+",
    label: "Projects Completed",
    description: "Full-stack applications and mobile solutions",
  },
  {
    icon: Users,
    value: "3+",
    label: "Years Experience",
    description: "In software development and research",
  },
  {
    icon: Award,
    value: "10+",
    label: "Technologies Mastered",
    description: "Modern web and mobile technologies",
  },
  {
    icon: Coffee,
    value: "1000+",
    label: "Hours of Coding",
    description: "Dedicated to building innovative solutions",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="container relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 hover:border-cyan-400/50 group">
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-25"
                    animate={{
                      opacity: [0.25, 0.5, 0.25],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  />

                  <div className="relative">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4"
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <IconComponent className="h-6 w-6 text-cyan-400" />
                    </motion.div>

                    <motion.div
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.value}
                    </motion.div>

                    <div className="text-lg font-medium text-slate-300 mb-2">{stat.label}</div>
                    <div className="text-sm text-slate-500">{stat.description}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
