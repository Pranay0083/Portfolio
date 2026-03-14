"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto bg-background/95 backdrop-blur border-x border-border/60 screen-line-before screen-line-after">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Pranay. Built with Next.js.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/Pranay0083" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/pranay-vishwakarma/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <a href="mailto:0083pranay@gmail.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
