"use client"

import { motion } from "framer-motion"
import { BarChart3, Database, ExternalLink, FileSpreadsheet } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const tools = [
  { name: "POS Data", icon: Database },
  { name: "ICMS", icon: FileSpreadsheet },
  { name: "DAX", icon: BarChart3 },
  { name: "Power BI", icon: BarChart3 },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-medium tracking-wider text-primary uppercase">
            Projects
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Showcasing data-driven projects that deliver real business impact.
          </p>
        </motion.div>

        {/* Featured project card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-video bg-secondary/30 md:aspect-auto md:min-h-[360px]">
              <Image
                src="/images/dashboard.jpg"
                alt="Sales Dashboard built with Power BI"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8">
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <BarChart3 className="h-3 w-3" />
                Featured Project
              </span>

              <h3 className="mb-3 text-2xl font-bold text-foreground">
                Sales Dashboard
              </h3>
              <p className="mb-2 text-sm font-medium text-primary">Power BI</p>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Comprehensive sales analytics dashboard integrating POS and ICMS
                data sources. Built with advanced DAX measures for real-time
                KPIs, trend analysis, and regional performance tracking that
                improved reporting efficiency by 25%.
              </p>

              {/* Tools used */}
              <div className="mb-6">
                <p className="mb-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      <tool.icon className="h-3 w-3 text-primary" />
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-fit gap-2 border-border text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                View Details
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
