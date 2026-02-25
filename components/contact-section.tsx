"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Gurugram, Haryana, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "prashantpbt98@outlook.com",
    href: "mailto:prashantpbt98@outlook.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8439491083",
    href: "tel:+918439491083",
  },
]

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
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Opens the user's email client with the message pre-filled
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    )
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )
    window.open(
      `mailto:prashantpbt98@outlook.com?subject=${subject}&body=${body}`,
      "_self"
    )
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary">
            CONTACT
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto grid max-w-4xl overflow-hidden rounded-2xl border border-border/50 shadow-xl md:grid-cols-5"
        >
          {/* Left panel — Contact Info */}
          <div className="flex flex-col justify-between gap-10 bg-primary px-8 py-10 text-primary-foreground md:col-span-2">
            <div>
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                Let{"'"}s connect and build something great together.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {contactInfo.map((item) => {
                const Inner = (
                  <span className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-xs font-medium text-primary-foreground/60">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </span>
                  </span>
                )

                return item.href ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="transition-opacity hover:opacity-80"
                    >
                      {Inner}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>{Inner}</li>
                )
              })}
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right panel — Form */}
          <div className="flex flex-col justify-center bg-card px-8 py-10 md:col-span-3">
            <h3 className="text-xl font-bold text-foreground">
              Send a Message
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form below and I{"'"}ll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button
                type="submit"
                className="mt-2 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {submitted ? "Sent!" : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <p className="mt-16 text-center text-xs text-muted-foreground">
          {new Date().getFullYear()} Prashant Sharma. All rights reserved.
        </p>
      </div>
    </section>
  )
}
