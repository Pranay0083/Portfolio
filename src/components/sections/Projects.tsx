"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PanelHeader, PanelTitle, PanelContent } from "@/components/layout/Panel"

const projects = [
  {
    title: "CPU-Scheduler",
    description: "An interactive OS scheduling simulator that gives a peek under the hood at how your computer manages tasks.",
    tags: ["TypeScript", "OS", "Visualizer"],
    demo: "#",
    repo: "https://github.com/Pranay0083/CPU-Scheduler"
  },
  {
    title: "CIFAR-10 experiments",
    description: "Hands-on task involving training and experimenting with a small CNN on a CIFAR-10 subset.",
    tags: ["Python", "Machine Learning"],
    demo: "#",
    repo: "https://github.com/Pranay0083/CIFAR-10-subset-CNN-experiments"
  },
  {
    title: "Video Call Protocol",
    description: "High-performance video calling application using a Custom Video Call Protocol (cvcp://) over raw TCP.",
    tags: ["JavaScript", "Networking", "TCP", "Computer Networks"],
    demo: "#",
    repo: "https://github.com/Pranay0083/Video-call-transfer-protocol"
  },
  {
    title: "Digital Wellbeing",
    description: "A Chrome/Edge Manifest V3 extension tracking daily/weekly time on websites for intentional browsing.",
    tags: ["Extension", "Productivity"],
    demo: "#",
    repo: "https://github.com/Pranay0083/Digital-wellbeing-for-browser"
  },
  {
    title: "YT Shorts Blocker",
    description: "Lightweight browser extension that comprehensively removes YouTube Shorts from your browsing experience.",
    tags: ["Extension", "Privacy"],
    demo: "#",
    repo: "https://github.com/Pranay0083/YouTube-shorts-blocker-extension"
  },
  {
    title: "Cilo Fashion",
    description: "A premium, interactive web application built to showcase modern fashion collections.",
    tags: ["TypeScript", "Frontend", "UI/UX"],
    demo: "#",
    repo: "https://github.com/Pranay0083/Cilo-A-Fashion-Collection-Website"
  }
]

export function Projects() {
  return (
    <>
      <PanelHeader className="flex items-center justify-between">
        <PanelTitle>Projects</PanelTitle>
        <Link href="https://github.com/Pranay0083" target="_blank" className="text-sm border-b border-transparent hover:border-foreground text-muted-foreground hover:text-foreground transition-all flex items-center gap-1">
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </PanelHeader>

      <PanelContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-background p-5 shadow-sm transition-colors hover:bg-muted/50"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0 relative z-10">
                    <Link href={project.repo} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-1 bg-background/50 rounded hover:bg-background">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href={project.demo} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-1 bg-background/50 rounded hover:bg-background">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-6 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Clickable overly connecting to demo/repo if needed, keeping it simple here */}
            </motion.div>
          ))}
        </div>
      </PanelContent>
    </>
  )
}
