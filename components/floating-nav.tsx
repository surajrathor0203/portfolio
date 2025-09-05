"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const downloadResume = () => {
  const link = document.createElement("a")
  link.href = "/resume/suraj_resume.pdf"
  link.download = "suraj_resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

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

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    if (isMobile) {
      setIsOpen(false)
    }

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  return (
    <>
      <motion.div
        className={`fixed top-4 sm:top-6 left-1/2 sm:left-[48%] -translate-x-1/2 z-50 px-4 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <motion.div
          className="relative px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700/50 shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur opacity-50"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {isMobile ? (
            <div className="relative flex items-center justify-between min-w-[200px]">
              <Link href="/" className="font-bold text-base sm:text-lg">
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Suraj
                </motion.span>
                <span className="text-white">R</span>
              </Link>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white hover:bg-slate-700/50 h-8 w-8 transition-all duration-200"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="font-bold text-lg mr-4">
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Suraj
                </motion.span>
                <span className="text-white">R</span>
              </Link>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="px-3 py-1 text-sm font-medium text-slate-400 hover:text-white transition-all duration-200 rounded-md hover:bg-slate-700/30"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
                <Button
                  size="sm"
                  className="ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 border-0 transition-all duration-300"
                  onClick={downloadResume}
                >
                  <Download className="w-4 h-4 mr-1" />
                  Resume
                </Button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="px-8 py-4 text-xl sm:text-2xl font-medium text-white hover:text-cyan-400 transition-all duration-300 text-center rounded-lg hover:bg-slate-800/30"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  delay: navItems.length * 0.1,
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 border-0 transition-all duration-300"
                  onClick={() => {
                    downloadResume()
                    setIsOpen(false)
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
