"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Web Developer & Head of Software Department",
      company: "Granville-Tech (South Africa)",
      period: "2024 - 2025",
      description:
        "Completed a remote internship, leading software development initiatives, collaborating with a global team, and contributing to innovative web solutions.",
      skills: ["Web Development", "Team Leadership", "Project Management"],
    },
    {
      title: "Active Member",
      company: "Google Developer Student Clubs (GDSC)",
      period: "2022 - 2024",
      description:
        "Contributed to various projects and events focused on technology, innovation, and community engagement.",
      skills: ["Community Engagement", "Technology", "Innovation"],
    },
    {
      title: "Research Assistant",
      company: "Beta Labs, IIIT Kottayam",
      period: "2022 - 2024",
      description: "Assisted in project development and collaborated with senior researchers.",
      skills: ["Research", "Project Development", "Collaboration"],
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-1">
                    <span className="font-medium text-slate-700">{exp.company}</span>
                    <span className="text-slate-500">{exp.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-slate-600">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
