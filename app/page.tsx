"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone, ExternalLink, Download, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Achievements } from "@/components/achievements"
import { StatsSection } from "@/components/stats-section"
import { ParticleBackground } from "@/components/particle-background"
import { motion } from "framer-motion"

const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects")
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" })
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

const downloadResume = () => {
  const link = document.createElement("a")
  link.href = "/resume/Suraj_Rathor_Resume.pdf"
  link.download = "Suraj_Rathor_Resume.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      <ParticleBackground />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-32 h-32 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 0.8, 1.1, 1],
              x: [0, -40, 20, 0],
              y: [0, 40, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-32 h-32 sm:w-96 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 0.9, 1],
              x: [0, 30, -50, 0],
              y: [0, -40, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4 overflow-hidden">
                <motion.span
                  className="relative z-10 flex items-center gap-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="w-4 h-4" />
                  Full Stack Developer • iOS Developer • AI Enthusiast
                </motion.span>
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                  animate={{
                    background: [
                      "linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))",
                      "linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.2))",
                      "linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                Suraj Rathor
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-[600px] mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Crafting innovative web applications, mobile solutions, and AI-powered systems. Specializing in full-stack
              development with modern technologies and scalable architectures.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 border-0 w-full sm:w-auto shadow-lg shadow-cyan-500/25"
                  onClick={scrollToProjects}
                >
                  <motion.span
                    className="relative z-10 flex items-center justify-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Projects
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-slate-600 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 w-full sm:w-auto bg-transparent backdrop-blur-sm"
                  onClick={scrollToContact}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {[
                { href: "https://github.com/surajrathor0203", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/suraj-rathor-1116472b0/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:rathor.suraj0203@gmail.com", icon: Mail, label: "Email" },
                { href: "tel:+919977964260", icon: Phone, label: "Phone" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 hover:border-cyan-400 backdrop-blur-sm transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <CreativeHero />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              scale: [1, 0.8, 1.2, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12 lg:mt-16">
            <motion.div
              className="relative order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute -inset-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-70"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative aspect-square rounded-xl overflow-hidden border border-slate-700 max-w-md mx-auto shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  rotate: 1,
                  transition: { duration: 0.3 },
                }}
              >
                <img src="/images/profile.jpeg" alt="Suraj Rathor" className="w-full h-full object-cover" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <span className="text-sm font-medium">Available for opportunities</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6 order-2 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassmorphicCard>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    I'm a passionate full-stack developer and AI enthusiast currently pursuing B.Tech in Computer
                    Science at IIIT Kottayam. I specialize in building scalable web applications, mobile solutions, and
                    AI-powered systems using cutting-edge technologies.
                  </p>
                  <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
                    My expertise spans across modern web technologies including React, Node.js, GraphQL, and cloud
                    platforms. I've successfully led software development initiatives at Granville-Tech (South Africa),
                    contributed to research at Beta Labs, and developed innovative solutions for government projects and
                    coaching management systems.
                  </p>
                  <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
                    I'm particularly passionate about AI integration, having developed NeuralChatAI - a sophisticated
                    chatbot application with real-time messaging and GPT-powered responses. I enjoy tackling complex
                    challenges and building solutions that make a real impact.
                  </p>

                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {[
                      { label: "Name", value: "Suraj Rathor" },
                      { label: "Email", value: "rathor.suraj0203@gmail.com" },
                      { label: "Location", value: "Kottayam, Kerala, India" },
                      // { label: "CGPA", value: "6.87/10", highlight: true },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="space-y-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-sm text-slate-500">{item.label}</div>
                        <div className={`font-medium text-xs sm:text-sm ${item.highlight ? "text-cyan-400" : ""}`}>
                          {item.value}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white w-full sm:w-auto shadow-lg shadow-cyan-500/25 relative overflow-hidden"
                        onClick={downloadResume}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download Resume
                        </span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              x: [0, -80, 60, 0],
              y: [0, 60, -40, 0],
              scale: [1, 0.9, 1.3, 1],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { name: "JavaScript", level: 95 },
              { name: "React.js", level: 95 },
              { name: "Node.js", level: 90 },
              { name: "MongoDB", level: 88 },
              { name: "Express.js", level: 90 },
              { name: "GraphQL", level: 85 },
              { name: "Swift", level: 80 },
              { name: "iOS Development", level: 82 },
              { name: "Python", level: 85 },
              { name: "Java", level: 80 },
              { name: "C/C++", level: 85 },
              { name: "PostgreSQL", level: 78 },
              { name: "MySQL", level: 80 },
              { name: "WordPress", level: 75 },
              { name: "Git", level: 90 },
              { name: "Linux", level: 82 },
              { name: "Figma", level: 75 },
              { name: "Nhost", level: 80 },
              { name: "Hasura", level: 78 },
              { name: "n8n", level: 75 },
              { name: "OpenRouter", level: 80 },
              { name: "AI Integration", level: 85 },
              { name: "Cloud Deployment", level: 80 },
              { name: "API Design", level: 88 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <SkillBadge name={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.4, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.7, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 5,
            }}
          />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work and innovations" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "NeuralChatAI",
                description:
                  "A sophisticated chatbot web application with GPT-powered responses, real-time messaging, secure authentication, and modern GraphQL architecture. Deployed on Netlify with scalable cloud hosting.",
                tags: ["React.js", "GraphQL", "Nhost", "Hasura", "n8n", "OpenRouter", "AI"],
                image: "/images/neural-chat-ai.png",
                demoUrl: "https://chatwitha.netlify.app/",
                repoUrl: "https://github.com/surajrathor0203",
                featured: true,
                hasLiveDemo: true,
              },
              {
                title: "TheShikshaPath (CMS)",
                description:
                  "A comprehensive Coaching Management System with advanced scheduling, performance monitoring, data analytics, and user engagement features. Streamlines coaching operations effectively.",
                tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Analytics"],
                image: "/images/coaching-system.jpeg",
                demoUrl: "https://theshikshapath.com",
                repoUrl: "https://github.com/surajrathor0203",
                featured: true,
                hasLiveDemo: true,
              },
              {
                title: "COMESA Government Project",
                description:
                  "South Africa Government project focusing on regional collaboration, data collection streamlining, and reporting mechanisms enhancement. Built with modern web technologies.",
                tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Government"],
                image: "/images/government-project.jpeg",
                demoUrl: "https://comesa.vercel.app/",
                repoUrl: "https://github.com/surajrathor0203",
                featured: true,
                hasLiveDemo: true,
              },
              {
                title: "Beta Lab Club Website",
                description:
                  "Interactive website for the research club focusing on user engagement, resource sharing, and community building with modern UI/UX design.",
                tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
                image: "/images/web-development.jpeg",
                demoUrl: "#",
                repoUrl: "https://github.com/surajrathor0203",
                hasLiveDemo: false,
              },
              {
                title: "Hall Booking System",
                description:
                  "A comprehensive venue reservation system with real-time availability tracking, booking management, and automated notifications.",
                tags: ["React.js", "Node.js", "MongoDB", "Real-time"],
                image: "/images/hall-booking.jpeg",
                demoUrl: "#",
                repoUrl: "https://github.com/surajrathor0203",
                hasLiveDemo: false,
              },
              {
                title: "iOS Development Projects",
                description:
                  "Multiple native iOS applications with focus on UI/UX design, mobile responsiveness, and Core Data integration using Swift and UIKit.",
                tags: ["Swift", "UIKit", "CoreData", "iOS", "Mobile"],
                image: "/images/ios-development.jpeg",
                demoUrl: "#",
                repoUrl: "https://github.com/surajrathor0203",
                hasLiveDemo: false,
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://github.com/surajrathor0203" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-slate-600 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent backdrop-blur-sm relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    View All Projects <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/3 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              x: [0, -60, 40, 0],
              y: [0, 40, -60, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              x: [0, 70, -30, 0],
              y: [0, -30, 70, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="Experience & Education" subtitle="My professional and academic journey" />

          <motion.div
            className="mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Timeline />
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.3, 0.7, 1],
            }}
            transition={{
              duration: 22,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              rotate: [360, 180, 0],
              scale: [1, 0.8, 1.4, 1],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="Achievements & Recognition" subtitle="Milestones and accomplishments" />

          <motion.div
            className="mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Achievements />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            animate={{
              x: [0, -40, 60, 0],
              y: [0, 50, -40, 0],
              scale: [1, 0.9, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title="Let's Work Together" subtitle="Ready to bring your ideas to life" />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassmorphicCard>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                <div className="space-y-6">
                  {[
                    {
                      href: "mailto:rathor.suraj0203@gmail.com",
                      icon: Mail,
                      label: "Email",
                      value: "rathor.suraj0203@gmail.com",
                    },
                    { href: "tel:+919977964260", icon: Phone, label: "Phone", value: "+91 9977964260" },
                    {
                      href: "https://www.linkedin.com/in/suraj-rathor-1116472b0/",
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "linkedin.com/in/suraj-rathor",
                    },
                    {
                      href: "https://github.com/surajrathor0203",
                      icon: Github,
                      label: "GitHub",
                      value: "github.com/surajrathor0203",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
                        <motion.div
                          className="flex items-center gap-4 hover:bg-slate-800/30 p-3 rounded-lg transition-colors border border-transparent hover:border-cyan-400/30"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <motion.div
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0"
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <contact.icon className="h-5 w-5 text-cyan-400" />
                          </motion.div>
                          <div className="min-w-0">
                            <div className="text-sm text-slate-500">{contact.label}</div>
                            <div className="font-medium text-sm sm:text-base break-all">{contact.value}</div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 pt-8 border-t border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-medium mb-4">Current Status</h4>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <span className="text-sm sm:text-base">
                      Available for full-time opportunities, internships, and freelance projects
                    </span>
                  </div>
                </motion.div>
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm">
        <motion.div
          className="container flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/" className="font-bold text-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Suraj</span>
                <span className="text-white">Rathor</span>
              </Link>
            </motion.div>
            <p className="text-sm text-slate-500 mt-2">
              © {new Date().getFullYear()} Suraj Rathor. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {[
              { href: "https://github.com/surajrathor0203", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/suraj-rathor-1116472b0/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:rathor.suraj0203@gmail.com", icon: Mail, label: "Email" },
              { href: "tel:+919977964260", icon: Phone, label: "Phone" },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 hover:border-cyan-400 backdrop-blur-sm transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </footer>
    </div>
  )
}
