"use client"

import { motion } from "framer-motion"
import { ArrowDown, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for opportunities
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Turning Data Into{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Business Decisions
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Data Analyst | Excel Automation Specialist | Power BI Developer.
            Transforming raw data into actionable insights that drive business
            growth and operational efficiency.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary"
              asChild
            >
              <a href="#experience">My Experience</a>
            </Button>
          </div>
        </motion.div>

        {/* Right content - Profile image + floating card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Profile image */}
          <div className="relative">
            <div className="relative h-72 w-72 overflow-hidden rounded-3xl border-2 border-border/50 shadow-2xl shadow-primary/10 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <Image
                src="/images/profile.jpg"
                alt="Prashant Sharma - Data Analyst"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative ring */}
            <div className="absolute -inset-3 -z-10 rounded-3xl border border-primary/10" />
            <div className="absolute -inset-6 -z-20 rounded-3xl border border-primary/5" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-8"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/80 px-5 py-3.5 shadow-xl backdrop-blur-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">25%</p>
                <p className="text-xs text-muted-foreground">
                  Reporting Efficiency Increase
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
