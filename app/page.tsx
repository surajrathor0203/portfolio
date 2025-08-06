"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'

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

const scrollToProjects = () => {
const projectsSection = document.getElementById('projects');
if (projectsSection) {
  projectsSection.scrollIntoView({ behavior: 'smooth' });
}
};

const scrollToContact = () => {
const contactSection = document.getElementById('contact');
if (contactSection) {
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
};

const downloadResume = () => {
// Create a link element and trigger download
const link = document.createElement('a');
link.href = '/resume/Suraj_Rathor_Resume.pdf';
link.download = 'Suraj_Rathor_Resume.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
};

export default function Portfolio() {
return (
  <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
    <ScrollProgress />
    <FloatingNav />

    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 sm:w-72 sm:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 sm:w-72 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="inline-block">
            <div className="relative px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
              <span className="relative z-10">Full Stack Developer & iOS Developer</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Suraj Rathor
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-[600px] mx-auto lg:mx-0">
            I build innovative web and mobile applications with modern technologies, specializing in full-stack development and iOS solutions.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <Button
              className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0 w-full sm:w-auto"
              onClick={scrollToProjects}
            >
              <span className="relative z-10 flex items-center justify-center">
                View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
            <Button
              variant="outline"
              className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500 w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>
          <div className="flex gap-4 pt-4 justify-center lg:justify-start">
            <Link href="https://github.com/surajrathor0203" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/suraj-rathor-1116472b0/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:rathor.suraj0203@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="tel:+919977964260">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <CreativeHero />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="My background and journey" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12 lg:mt-16">
          <div className="relative order-1 lg:order-1">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 max-w-md mx-auto">
              <img
                src="/images/profile.jpeg"
                alt="Suraj Rathor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-2 lg:order-2">
            <GlassmorphicCard>
              <p className="text-base sm:text-lg text-zinc-300">
                I'm a passionate full-stack developer and iOS enthusiast currently pursuing B.Tech in Computer Science at IIIT Kottayam.
                I specialize in building modern web applications using React, Node.js, and MongoDB, while also developing native iOS applications.
              </p>
              <p className="text-base sm:text-lg text-zinc-300 mt-4">
                My journey includes leading software development at Granville-Tech (South Africa), contributing to research at Beta Labs,
                and being an active member of Google Developer Student Clubs. I've worked on diverse projects from government systems to coaching management platforms.
              </p>
              <p className="text-base sm:text-lg text-zinc-300 mt-4">
                When I'm not coding, you can find me exploring new technologies, participating in hackathons, and contributing to open-source projects.
                I'm always eager to learn and take on challenging projects that make a real impact.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Name</div>
                  <div className="font-medium">Suraj Rathor</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="font-medium text-xs sm:text-sm">rathor.suraj0203@gmail.com</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Location</div>
                  <div className="font-medium">Kottayam, Kerala, India</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Availability</div>
                  <div className="font-medium text-green-500">Open to opportunities</div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="bg-zinc-800 hover:bg-zinc-700 text-white w-full sm:w-auto"
                  onClick={downloadResume}
                >
                  Download Resume
                </Button>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="My Skills" subtitle="Technologies I work with" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 lg:mt-16">
          <SkillBadge name="C/C++" level={85} />
          <SkillBadge name="JavaScript" level={90} />
          <SkillBadge name="Java" level={80} />
          <SkillBadge name="Python" level={85} />
          <SkillBadge name="Swift" level={75} />
          <SkillBadge name="React" level={95} />
          <SkillBadge name="Node.js" level={90} />
          <SkillBadge name="MongoDB" level={85} />
          <SkillBadge name="iOS Development" level={80} />
          <SkillBadge name="WordPress" level={70} />
          <SkillBadge name="Git" level={85} />
          <SkillBadge name="Express.js" level={88} />
          <SkillBadge name="TypeScript" level={85} />
          <SkillBadge name="Next.js" level={90} />
          <SkillBadge name="Tailwind CSS" level={95} />
          <SkillBadge name="Firebase" level={80} />
          <SkillBadge name="MySQL" level={75} />
          <SkillBadge name="Docker" level={70} />
          <SkillBadge name="AWS" level={65} />
          <SkillBadge name="GraphQL" level={70} />
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          <ProjectCard
            title="TheShikshaPath (CMS)"
            description="A comprehensive Coaching Management System to streamline operations, track progress, and enhance user engagement with scheduling and analytics."
            tags={["React.js", "Node.js", "MongoDB", "Express.js"]}
            image="/images/coaching-system.jpeg"
            demoUrl="https://theshikshapath.com"
            repoUrl="https://github.com/surajrathor0203"
          />
          <ProjectCard
            title="South Africa Government Project"
            description="COMESA project focusing on regional collaboration, data collection streamlining, and reporting mechanisms enhancement."
            tags={["React.js", "Node.js", "Express.js", "MongoDB"]}
            image="/images/government-project.jpeg"
            demoUrl="https://example.com"
            repoUrl="https://github.com/surajrathor0203"
          />
          <ProjectCard
            title="Beta Lab Club Website"
            description="Interactive website for the club focusing on user engagement, resource sharing, and community building."
            tags={["React.js", "Node.js", "Express.js", "MongoDB"]}
            image="/images/web-development.jpeg"
            demoUrl="https://example.com"
            repoUrl="https://github.com/surajrathor0203"
          />
          <ProjectCard
            title="Hall Booking Website"
            description="A venue reservation system that facilitates hall bookings and availability tracking with real-time updates."
            tags={["React.js", "Node.js", "MongoDB", "Express.js"]}
            image="/images/hall-booking.jpeg"
            demoUrl="https://example.com"
            repoUrl="https://github.com/surajrathor0203"
          />
          <ProjectCard
            title="iOS Front-End Projects"
            description="Multiple iOS applications focusing on UI/UX design and mobile responsiveness with native Swift development."
            tags={["Swift", "UIKit", "CoreData", "iOS"]}
            image="/images/ios-development.jpeg"
            demoUrl="https://example.com"
            repoUrl="https://github.com/surajrathor0203"
          />
          <ProjectCard
            title="Portfolio Website"
            description="This portfolio website showcasing my projects and skills, built with modern web technologies."
            tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
            image="/images/web-development.jpeg"
            demoUrl="https://surajrathor.dev"
            repoUrl="https://github.com/surajrathor0203"
          />
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="Experience & Education" subtitle="My professional and academic journey" />

        <div className="mt-12 lg:mt-16">
          <Timeline />
        </div>
      </div>
    </section>

    {/* Achievements Section */}
    <section id="achievements" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="My Achievements" subtitle="Recognitions and milestones" />

        <div className="mt-12 lg:mt-16">
          <Achievements />
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-12 lg:mt-16">
          <GlassmorphicCard>
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <Link href="mailto:rathor.suraj0203@gmail.com" className="block">
                <div className="flex items-center gap-4 hover:bg-zinc-800/30 p-2 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium text-sm sm:text-base break-all">rathor.suraj0203@gmail.com</div>
                  </div>
                </div>
              </Link>
              <Link href="tel:+919977964260" className="block">
                <div className="flex items-center gap-4 hover:bg-zinc-800/30 p-2 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">+91 9977964260</div>
                  </div>
                </div>
              </Link>
              
              <Link href="https://www.linkedin.com/in/suraj-rathor-1116472b0/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center gap-4 hover:bg-zinc-800/30 p-2 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium text-sm sm:text-base break-all">linkedin.com/in/suraj-rathor-1116472b0</div>
                  </div>
                </div>
              </Link>
              <Link href="https://github.com/surajrathor0203" target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center gap-4 hover:bg-zinc-800/30 p-2 rounded-lg transition-colors">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Github className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium text-sm sm:text-base break-all">github.com/surajrathor0203</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-800">
              <h4 className="text-lg font-medium mb-4">Current Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Available for internships, freelance work, and full-time opportunities</span>
              </div>
            </div>
          </GlassmorphicCard>

          <ContactForm />
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-zinc-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <Link href="/" className="font-bold text-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Suraj</span>
            <span className="text-white">Rathor</span>
          </Link>
          <p className="text-sm text-zinc-500 mt-2">
            © {new Date().getFullYear()} Suraj Rathor. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/surajrathor0203" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/suraj-rathor-1116472b0/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:rathor.suraj0203@gmail.com">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
          <Link href="tel:+919977964260">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  </div>
)
}
