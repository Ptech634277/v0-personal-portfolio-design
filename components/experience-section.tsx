"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    role: "Data Analyst",
    company: "Vervebot",
    period: "March 2024 - Present",
    icon: Briefcase,
    highlights: [
      "Built interactive Power BI dashboards for real-time business insights",
      "Developed POS reporting systems increasing efficiency by 25%",
      "Automated daily reporting workflows using Excel macros and DAX",
      "Managed data from ICMS and POS platforms for unified analytics",
    ],
  },
  {
    role: "Computer Teacher",
    company: "Analyzer Institute",
    period: "2021 - 2024",
    icon: GraduationCap,
    highlights: [
      "Taught computer fundamentals and advanced Excel to 200+ students",
      "Designed curriculum for data analysis and business tool training",
      "Mentored students in practical data management skills",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-secondary/30" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Experience
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Professional Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Building expertise through hands-on data analysis and education.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="relative z-10 hidden md:block">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-card shadow-lg shadow-primary/5">
                    <exp.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <span className="mt-1 inline-flex w-fit items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
