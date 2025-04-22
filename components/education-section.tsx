"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export default function EducationSection() {
  const education = {
    institution: "Indian Institute of Information Technology, Kottayam, Kerala",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    period: "Nov 2022 - April 2026",
    cgpa: "7/10",
    courses: [
      "Operating Systems",
      "Data Structures",
      "Algorithms",
      "Computer Architecture",
      "DBMS",
      "Computer Networks",
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <BookOpen className="h-8 w-8 text-slate-700" />
          <div>
            <CardTitle>Education</CardTitle>
            <CardDescription>Academic Background</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg">{education.institution}</h3>
          <p className="text-slate-600 mb-2">{education.degree}</p>
          <p className="text-slate-500 mb-2">{education.period}</p>
          <p className="text-slate-500 mb-4">CGPA: {education.cgpa}</p>

          <h4 className="font-medium mb-2">Relevant Coursework:</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
            {education.courses.map((course, index) => (
              <li key={index} className="text-slate-600 text-sm">
                • {course}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
