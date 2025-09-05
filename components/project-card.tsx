"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
  featured?: boolean
  hasLiveDemo?: boolean
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  repoUrl,
  featured = false,
  hasLiveDemo = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative h-full"
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative h-full overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border transition-all duration-500 ${
          featured
            ? "border-cyan-400/50 shadow-lg shadow-cyan-500/25"
            : "border-slate-700/50 group-hover:border-cyan-400/50"
        }`}
        whileHover={{
          boxShadow: featured ? "0 25px 50px -12px rgba(6, 182, 212, 0.4)" : "0 25px 50px -12px rgba(6, 182, 212, 0.2)",
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-25"
          animate={{
            opacity: isHovered ? 1 : 0.25,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />

        <div className="relative h-full flex flex-col">
          {featured && (
            <motion.div className="absolute top-3 left-3 z-20" variants={childVariants}>
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 shadow-lg">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                >
                  <Star className="w-3 h-3 mr-1" />
                </motion.div>
                Featured
              </Badge>
            </motion.div>
          )}

          <motion.div className="relative overflow-hidden h-48 group" variants={childVariants}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-blue-500/20 opacity-0 z-10"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
                filter: isHovered ? "brightness(1.1)" : "brightness(1)",
              }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Floating particles effect on hover */}
            {isHovered && (
              <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    initial={{
                      x: Math.random() * 200,
                      y: Math.random() * 200,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      y: -50,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="p-4 sm:p-6 flex-grow"
            variants={childVariants}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-lg sm:text-xl font-bold mb-2 text-white"
              animate={{
                color: isHovered ? "#22d3ee" : "#ffffff",
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <p className="text-slate-400 mb-4 text-sm sm:text-base leading-relaxed">{description}</p>

            <motion.div className="flex flex-wrap gap-2 mb-4" variants={childVariants}>
              {tags.map((tag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-slate-700/50 hover:bg-slate-700 text-slate-300 text-xs border border-slate-600 transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="flex gap-2 mt-auto" variants={childVariants}>
              {hasLiveDemo ? (
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                >
                  <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white border-0 relative overflow-hidden shadow-lg transition-all duration-300"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                >
                  <Button
                    size="sm"
                    disabled
                    className="w-full bg-slate-700/50 text-slate-500 border border-slate-600 cursor-not-allowed transition-all duration-300"
                  >
                    <EyeOff className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </motion.div>
              )}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-slate-400 hover:text-white hover:border-cyan-400 bg-transparent backdrop-blur-sm relative overflow-hidden transition-all duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 bg-cyan-400/5"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                    <span className="relative z-10">
                      <Github className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-3 right-3 z-20"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, 180, 360] : 0,
            }}
            transition={{
              duration: isHovered ? 1 : 0.3,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isHovered ? "bg-green-500 shadow-lg shadow-green-500/50" : "bg-slate-500"
              }`}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
