"use client"

import { motion } from "framer-motion"
import { BadgeCheck, MapPin, Briefcase, Mail, Link as LinkIcon, Github, Linkedin, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section className="flex flex-col gap-8 pb-12 pt-6">
      
      {/* ASCII Art Logo (Simulated shape of CD/CD-inspired block) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-mono text-xs sm:text-sm leading-[1.1] text-muted-foreground whitespace-pre select-none opacity-50 hidden sm:block"
      >
{`
    ___  _  _  ___  __  __
   / _ \\| \\| |/ _ \\|  \\/  |
  | (_) | .  | (_) | |\\/| |
   \\__/_|_|\\_|\\___/|_|  |_|
`}
      </motion.div>

      <div className="flex flex-col gap-6">
        
        {/* Avatar & Name */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="relative">
            <div className="h-20 w-20 rounded-full border border-border bg-muted overflow-hidden flex items-center justify-center">
               <span className="text-3xl font-semibold">P</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold tracking-tight flex items-center gap-2">
              Pranay Vishwakarma
              <BadgeCheck className="h-6 w-6 text-blue-500 fill-blue-500/20" />
            </h1>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </motion.div>

        {/* Info Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-px bg-border max-w-lg mt-4"
        >
          <div className="bg-background flex gap-4 p-4 items-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            <Briefcase className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 justify-between flex-1 relative z-10">
              <span className="text-sm font-medium">Role</span>
              <span className="text-sm text-muted-foreground">Software Engineer</span>
            </div>
          </div>

          <div className="bg-background flex gap-4 p-4 items-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 justify-between flex-1 relative z-10">
              <span className="text-sm font-medium">Location</span>
              <span className="text-sm text-muted-foreground block relative">
                 Delhi, India
                 <span className="absolute -right-3 top-1/2 -translate-y-1/2 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                 </span>
              </span>
            </div>
          </div>

          <div className="bg-background flex gap-4 p-4 items-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 justify-between flex-1 relative z-10">
              <span className="text-sm font-medium">Contact</span>
              <a href="mailto:0083pranay@gmail.com" className="text-sm text-muted-foreground hover:text-foreground hover:underline decoration-muted-foreground/50 transition-colors">0083pranay@gmail.com</a>
            </div>
          </div>
        </motion.div>

        {/* Social Links Row */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mt-4"
        >
          <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-foreground group">
            <Github className="h-4 w-4" />
            GitHub
            <LinkIcon className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1" />
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-foreground group">
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <LinkIcon className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1" />
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-foreground group">
            <Twitter className="h-4 w-4" />
            Twitter
            <LinkIcon className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
