import { ArrowDownIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"

// Add the Image import at the top
import Image from "next/image"

// Add the social icons import
import { Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-white w-32 h-32 md:w-40 md:h-40">
              <Image src="/images/profile.jpeg" alt="Suraj Rathor" width={160} height={160} className="object-cover" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Suraj Rathor</h1>
          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up">
            Computer Science Engineer & Web Developer
          </h2>
          {/* Add social links below the buttons in the hero section */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay">
             <Button asChild className="bg-white text-slate-900 hover:bg-slate-200">
              <Link href="#about">About Me</Link>
            </Button>
            <Button asChild className="bg-white text-slate-900 hover:bg-slate-200">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-4 animate-fade-in-delay">
            <a
              href="https://github.com/surajrathor0203"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-rathor-1116472b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about">
              <ArrowDownIcon className="h-8 w-8 text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a Computer Science Engineering student at Indian Institute of Information Technology, Kottayam, with
                a passion for web development and software engineering. With experience in various programming languages
                and technologies, I enjoy creating innovative solutions to complex problems.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild>
                  <a href="mailto:rathor.suraj0203gmail.com">Email Me</a>
                </Button>
              </div>
            </div>
            <EducationSection />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
