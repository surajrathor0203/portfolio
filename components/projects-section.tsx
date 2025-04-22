"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// Remove the Button import
// Remove the ExternalLink and Github imports

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Beta Lab Club Website",
      year: "2023",
      description: "Created an interactive website for a club, focusing on user engagement and resource sharing.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "/images/web-development.jpeg",
    },
    {
      title: "South Africa Government Project (COMESA)",
      year: "2024",
      description:
        "Worked on a South Africa Government project under COMESA, focusing on project management, data analysis, and ICT solutions. Contributed to enhancing regional collaboration, streamlining data collection, and improving reporting mechanisms.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "/images/government-project.jpeg",
    },
    {
      title: "Coaching Management System (CMS)",
      year: "2025",
      description:
        "Developed and managed the Coaching Management System (CMS) to streamline coaching operations, track progress, and enhance user engagement. Implemented key features for scheduling, performance monitoring, and data analytics.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      image: "/images/coaching-system.jpeg",
    },
    {
      title: "Hall Booking Website",
      year: "2024",
      description: "Built a hall booking website that facilitates venue reservations and availability tracking.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      image: "/images/hall-booking.jpeg",
    },
    {
      title: "iOS Front-End Development",
      year: "2024",
      description:
        "Worked as an iOS front-end developer on multiple projects, focusing on UI/UX and mobile responsiveness.",
      technologies: ["Swift", "UIKit", "CoreData"],
      image: "/images/ios-development.jpeg",
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
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{project.year}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-slate-600 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {/* CardFooter with buttons has been removed */}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
