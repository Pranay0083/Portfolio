"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
      <div className="md:grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose prose-neutral dark:prose-invert"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am a Software Engineer based in Delhi, India, with a passion for building innovative solutions.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            Skilled in TypeScript, JavaScript, React, Next.js, and Python. I enjoy working on projects ranging from browser extensions to machine learning experiments and full-stack web applications.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
             Always exploring new technologies and finding unique ways to solve complex problems.
          </p>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="mt-8 md:mt-0 space-y-4"
        >
           <h3 className="text-xl font-semibold">Connect</h3>
           <ul className="list-none space-y-2 text-muted-foreground">
             <li>
               <a href="mailto:0083pranay@gmail.com" className="hover:text-foreground transition-colors underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground">
                 0083pranay@gmail.com
               </a>
             </li>
             <li>
               <a href="https://linkedin.com/in/pranay-vishwakarma/" target="_blank" className="hover:text-foreground transition-colors underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground">
                 LinkedIn
               </a>
             </li>
             <li>
               <a href="https://github.com/Pranay0083" target="_blank" className="hover:text-foreground transition-colors underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground">
                 GitHub
               </a>
             </li>
           </ul>
        </motion.div>
      </div>
    </section>
  )
}
