"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  LineChart,
  Monitor,
  PieChart,
  Settings,
  Table,
  Workflow,
} from "lucide-react"

const skillGroups = [
  {
    title: "Data Analysis",
    description: "Transforming raw data into insights",
    skills: [
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Power BI", icon: BarChart3 },
      { name: "DAX", icon: LineChart },
    ],
  },
  {
    title: "Data Management",
    description: "Organizing and maintaining data pipelines",
    skills: [
      { name: "ICMS", icon: Database },
      { name: "POS Systems", icon: Monitor },
      { name: "Data Cleaning", icon: Table },
    ],
  },
  {
    title: "Business Tools",
    description: "Streamlining business operations",
    skills: [
      { name: "Reporting", icon: PieChart },
      { name: "Process Automation", icon: Workflow },
      { name: "Dashboard Design", icon: Settings },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Skills
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tools & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A comprehensive toolkit for transforming data into actionable
            business intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="group rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                {group.description}
              </p>

              <div className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-border/30 bg-secondary/40 px-4 py-3 transition-colors group-hover:border-primary/10"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <skill.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
