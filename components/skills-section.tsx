"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Database, Laptop, Wrench, Brain } from "lucide-react"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("programming")

  const skills = {
    programming: ["C", "C++", "JavaScript", "Java", "Python", "Swift"],
    web: ["WordPress", "HTML", "CSS", "React", "Node.js", "Express", "MongoDB"],
    development: ["iOS Development", "Web Development"],
    tools: ["Git", "Canva", "Linux", "Figma"],
    platforms: ["Windows", "macOS", "Ubuntu", "MySQL"],
    soft: ["Communication", "Logical Thinking", "Active Learning", "Stress Management", "Leadership"],
  }

  const icons = {
    programming: <Code className="h-6 w-6" />,
    web: <Globe className="h-6 w-6" />,
    development: <Laptop className="h-6 w-6" />,
    tools: <Wrench className="h-6 w-6" />,
    platforms: <Database className="h-6 w-6" />,
    soft: <Brain className="h-6 w-6" />,
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>

        <Tabs defaultValue="programming" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="programming" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden md:inline">Programming</span>
            </TabsTrigger>
            <TabsTrigger value="web" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden md:inline">Web</span>
            </TabsTrigger>
            <TabsTrigger value="development" className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              <span className="hidden md:inline">Development</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              <span className="hidden md:inline">Tools</span>
            </TabsTrigger>
            <TabsTrigger value="platforms" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden md:inline">Platforms</span>
            </TabsTrigger>
            <TabsTrigger value="soft" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              <span className="hidden md:inline">Soft Skills</span>
            </TabsTrigger>
          </TabsList>

          {Object.keys(skills).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="flex items-center mb-6">
                {icons[category as keyof typeof icons]}
                <h3 className="text-xl font-semibold ml-2">
                  {category.charAt(0).toUpperCase() + category.slice(1)} Skills
                </h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={container}
                initial="hidden"
                animate={activeTab === category ? "show" : "hidden"}
              >
                {skills[category as keyof typeof skills].map((skill, index) => (
                  <motion.div key={index} variants={item}>
                    <Badge className="px-4 py-2 text-base bg-slate-800 hover:bg-slate-700">{skill}</Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
