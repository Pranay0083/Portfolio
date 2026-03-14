"use client"

import { motion } from "framer-motion"
import { PanelHeader, PanelTitle, PanelContent } from "@/components/layout/Panel"

const stack = [
  "JavaScript", "TypeScript", "React", "Next.js", "Python", "Java", "C++", "Jupyter Note.", "HTML/CSS", "Git", "Figma", "Node.js", "Tailwind"
]

export function Stack() {
  return (
    <>
      <PanelHeader>
        <PanelTitle>Tech Stack</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="flex flex-wrap gap-2">
          {stack.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="inline-flex items-center rounded bg-secondary/50 px-2 py-1 text-xs font-mono font-medium text-secondary-foreground"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </PanelContent>
    </>
  )
}
