"use client"

import { motion } from "framer-motion"
import { 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowUpRight,
  CodeXml
} from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="flex flex-col gap-8 pb-12 pt-6">
      
      {/* ASCII Art Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="font-mono text-xs sm:text-sm leading-[1.1] text-muted-foreground whitespace-pre select-none opacity-50 hidden sm:block"
      >
{String.raw`____  _   _  ____   _____ 
 / ___)( )_( )(  _ \ (  _  )
 \___ \ ) _ (  )(_) ) )(_)( 
 (____/(_) (_)(____/ (_____)`}
      </motion.div>

      <div className="flex flex-col gap-8">
        
        {/* Avatar & Name */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-6"
        >
          <div className="relative">
            <div className="h-24 w-24 rounded-2xl border border-border/60 bg-muted/30 overflow-hidden flex items-center justify-center shadow-sm">
               <img 
                 src="/avatar.png" 
                 alt="Pranay Vishwakarma" 
                 className="h-full w-full object-cover"
               />
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-background shadow-sm" title="Available for work" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Pranay Vishwakarma
            </h1>
            <p className="text-lg text-muted-foreground font-medium">Software Engineer</p>
          </div>
        </motion.div>

        {/* Info List Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 px-1"
        >
          <div className="flex flex-col gap-3">
            <InfoItem icon={CodeXml} text="Software Engineer" />
            <InfoItem icon={MapPin} text="Delhi, India" />
          </div>
          <div className="flex flex-col gap-3">
             <InfoItem icon={Mail} text="0083pranay@gmail.com" />
          </div>
        </motion.div>

        {/* Social Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-border/40 mt-4 outline-border/20"
        >
          <SocialCard name="GitHub" icon={Github} href="#" className="border-r border-b border-border/40" />
          <SocialCard name="LinkedIn" icon={Linkedin} href="#" className="border-r border-b border-border/40" />
          <SocialCard name="Email" icon={Mail} href="mailto:0083pranay@gmail.com" className="border-r border-b border-border/40" />
        </motion.div>

      </div>
    </section>
  )
}

function InfoItem({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-mono tracking-tight text-foreground/80 group cursor-default">
      <div className="h-8 w-8 rounded-full border border-border/60 flex items-center justify-center bg-muted/20 shrink-0 transition-colors group-hover:bg-muted/40">
        <Icon className="h-4 w-4 text-muted-foreground/70" />
      </div>
      <span>{text}</span>
    </div>
  )
}

function SocialCard({ name, icon: Icon, href, className }: { name: string, icon: any, href: string, className?: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-between p-4 bg-background hover:bg-muted/30 transition-all group",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-muted/30 flex items-center justify-center transition-transform group-hover:scale-105">
          <Icon className="h-6 w-6 text-foreground/80" />
        </div>
        <span className="text-sm font-semibold tracking-tight">{name}</span>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-foreground/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
