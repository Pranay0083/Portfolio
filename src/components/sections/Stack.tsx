"use client"

import { motion } from "framer-motion"

const stack = [
  "JavaScript", "TypeScript", "React", "Next.js", "Python", "Java", "C++", "Jupyter Notebook", "HTML/CSS", "Git", "Figma", "Node.js", "Tailwind CSS"
]

export function Stack() {
  return (
    <section id="stack" className="py-12 md:py-16 space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {stack.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="inline-flex items-center rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground cursor-default"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
