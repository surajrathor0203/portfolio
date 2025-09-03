"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Web Developer & Head of Software Department",
    company: "Granville-Tech (South Africa)",
    period: "Dec 2024 - Feb 2025",
    description:
      "Led software development initiatives in a remote internship, collaborating with a global team on innovative web solutions. Contributed to international projects and managed software development workflows.",
  },
  {
    title: "Research Assistant",
    company: "Beta Labs, IIIT Kottayam",
    period: "Dec 2022 - Oct 2024",
    description:
      "Assisted in project development and collaborated with senior researchers on cutting-edge technology projects. Contributed to academic research initiatives and technology innovation.",
  },
  {
    title: "Active Member",
    company: "Google Developer Student Clubs (GDSC)",
    period: "Dec 2022 - Oct 2024",
    description:
      "Contributed to various projects and events focused on technology, innovation, and community engagement. Participated in hackathons, tech workshops, and community building activities.",
  },
  {
    title: "B.Tech Computer Science Student",
    company: "IIIT Kottayam, Kerala",
    period: "Nov 2022 - Apr 2026",
    description:
      "Pursuing Bachelor of Technology in Computer Science and Engineering with focus on full-stack development, algorithms, system design, AI, and cloud computing. CGPA: 6.87/10",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-slate-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 hover:border-cyan-400/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                <div className="text-slate-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-slate-300 leading-relaxed">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-10 flex items-center justify-center shadow-lg shadow-cyan-500/25"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
