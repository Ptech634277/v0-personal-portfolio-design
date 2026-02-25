"use client"

import { motion } from "framer-motion"
import { BookOpen, GraduationCap } from "lucide-react"

const education = [
  {
    degree: "MBA",
    field: "Business Administration",
    institution: "In Progress",
    status: "Currently Pursuing",
    icon: BookOpen,
    description:
      "Advancing business acumen with a focus on strategic management and data-driven decision making.",
  },
  {
    degree: "B.Sc",
    field: "Agriculture",
    institution: "Completed",
    status: "Graduate",
    icon: GraduationCap,
    description:
      "Foundation in analytical thinking and research methodology, applied to modern data analysis.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function EducationSection() {
  return (
    <section id="education" className="relative py-24">
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
            Education
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Academic Background
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A strong educational foundation supporting data-driven expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <edu.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Status badge */}
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {edu.status}
              </span>

              <h3 className="text-xl font-bold text-foreground">
                {edu.degree}
              </h3>
              <p className="mb-3 text-sm font-medium text-primary">
                {edu.field}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
