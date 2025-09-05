"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  // Use spring animation for smoother progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Add gradient animation
  const gradientOffset = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{
        scaleX,
        background: `linear-gradient(90deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)`,
        backgroundSize: "200% 100%",
        backgroundPosition: `${gradientOffset} 0%`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{
        opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      }}
    />
  )
}
