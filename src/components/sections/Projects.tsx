"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "CPU-Scheduler",
    description: "An interactive OS scheduling simulator that gives a peek under the hood at how your computer manages tasks.",
    tags: ["TypeScript", "OS", "Visualizer"],
    demo: "#",
    repo: "https://github.com/Pranay0083/CPU-Scheduler"
  },
  {
    title: "CIFAR-10 CNN Experiments",
    description: "Hands-on task involving training and experimenting with a small CNN on a CIFAR-10 subset.",
    tags: ["Jupyter Notebook", "Python", "Deep Learning"],
    demo: "#",
    repo: "https://github.com/Pranay0083/CIFAR-10-subset-CNN-experiments"
  },
  {
    title: "Video Call Protocol",
    description: "High-performance video calling application using a Custom Video Call Protocol (cvcp://) over raw TCP.",
    tags: ["JavaScript", "Networking", "TCP"],
    demo: "#",
    repo: "https://github.com/Pranay0083/Video-call-transfer-protocol"
  },
  {
    title: "Browser Digital Wellbeing",
    description: "A Chrome/Edge Manifest V3 extension tracking daily/weekly time on websites for intentional browsing.",
    tags: ["JavaScript", "Browser Extension", "Productivity"],
    demo: "#",
    repo: "https://github.com/Pranay0083/Digital-wellbeing-for-browser"
  },
  {
    title: "YouTube Shorts Blocker",
    description: "Lightweight browser extension that comprehensively removes YouTube Shorts from your browsing experience.",
    tags: ["JavaScript", "Browser Extension", "Privacy"],
    demo: "#",
    repo: "https://github.com/Pranay0083/YouTube-shorts-blocker-extension"
  },
  {
    title: "Cilo Fashion",
    description: "A premium, interactive web application built to showcase modern fashion collections.",
    tags: ["TypeScript", "Frontend", "eCommerce"],
    demo: "#",
    repo: "https://github.com/Pranay0083/Cilo-A-Fashion-Collection-Website"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <Link href="https://github.com/Pranay0083" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          View GitHub profile →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex flex-col h-full space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg hover:underline decoration-primary underline-offset-4">
                  <Link href={project.demo} target="_blank">{project.title}</Link>
                </h3>
                <div className="flex gap-2">
                  <Link href={project.repo} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href={project.demo} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Live Demo</span>
                  </Link>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
