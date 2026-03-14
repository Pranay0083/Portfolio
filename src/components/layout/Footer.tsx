"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-8 py-8 md:py-12 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by <a href="https://github.com/Pranay0083" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Pranay Vishwakarma</a>. The source code is available on <a href="https://github.com/Pranay0083/Portfolio" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Pranay0083" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/pranay-vishwakarma/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:0083pranay@gmail.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
