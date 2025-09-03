"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  Server,
  GitBranch,
  Layers,
  Palette,
  Cloud,
  Terminal,
  FileCode,
  Cpu,
  Zap,
  Box,
  Monitor,
  Workflow,
  Shield,
  Search,
  Brain,
  Cog,
  Network,
} from "lucide-react"

interface SkillBadgeProps {
  name: string
  level: number
}

const getSkillIcon = (skillName: string) => {
  const iconMap: { [key: string]: any } = {
    "C/C++": Terminal,
    JavaScript: FileCode,
    Java: Cpu,
    Python: Code2,
    Swift: Smartphone,
    "React.js": Layers,
    "Node.js": Server,
    MongoDB: Database,
    "iOS Development": Smartphone,
    WordPress: Globe,
    Git: GitBranch,
    "Express.js": Server,
    TypeScript: FileCode,
    "Next.js": Zap,
    "Tailwind CSS": Palette,
    Firebase: Cloud,
    MySQL: Database,
    PostgreSQL: Database,
    Docker: Box,
    AWS: Cloud,
    GraphQL: Search,
    Linux: Terminal,
    Figma: Palette,
    Nhost: Cloud,
    Hasura: Database,
    n8n: Workflow,
    OpenRouter: Network,
    "AI Integration": Brain,
    "Cloud Deployment": Cloud,
    "API Design": Cog,
    "Real-time": Zap,
    Mobile: Smartphone,
    Analytics: Monitor,
    Government: Shield,
  }

  return iconMap[skillName] || Code2
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const IconComponent = getSkillIcon(name)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 h-full transition-all duration-300 hover:border-cyan-400/50 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <IconComponent className="h-6 w-6 text-cyan-400" />
            </div>
          </div>

          <div className="text-center mb-4 font-medium text-lg text-white">{name}</div>

          <div className="relative h-2.5 w-full bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="mt-2 text-right text-sm text-slate-400">{level}%</div>
        </div>
      </div>
    </motion.div>
  )
}
