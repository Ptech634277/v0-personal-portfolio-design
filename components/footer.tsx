"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prashant-sharma-5683b2213",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Ptech634277/My-Portfolio",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:PRASHANTPBT98@OUTLOOK.COM",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between"
      >
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          PRASHANT<span className="text-primary">.</span>
        </a>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card/60 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          {new Date().getFullYear()} Prashant Sharma. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
