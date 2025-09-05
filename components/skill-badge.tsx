"use client"

import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500"
    if (level >= 80) return "from-blue-500 to-cyan-500"
    if (level >= 70) return "from-yellow-500 to-orange-500"
    return "from-red-500 to-pink-500"
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
            }
          : {
              opacity: 0,
              scale: 0.8,
              y: 20,
            }
      }
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
        whileHover={{
          boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.2)",
          transition: { duration: 0.3 },
        }}
      >
        <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <motion.h3
              className="font-semibold text-white text-sm"
              animate={{
                color: isInView ? "#ffffff" : "#64748b",
              }}
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.h3>
            <motion.span
              className="text-xs text-cyan-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {level}%
            </motion.span>
          </div>

          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${getSkillColor(level)} rounded-full relative`}
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${level}%` : 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: 1.3,
                }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Badge
              variant="secondary"
              className="mt-2 bg-slate-700/30 text-slate-300 text-xs border-slate-600/50 transition-all duration-300 group-hover:bg-slate-600/50"
            >
              {level >= 90 ? "Expert" : level >= 80 ? "Advanced" : level >= 70 ? "Intermediate" : "Beginner"}
            </Badge>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
