"use client"

import { motion } from "framer-motion"
import { PanelHeader, PanelTitle, PanelContent } from "@/components/layout/Panel"

export function About() {
  return (
    <>
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed"
        >
          <p>
            I am a Student based in Delhi, India, with a passion for building innovative solutions and intuitive interfaces. I enjoy working on problems into bytes.
          </p>
          <p className="mt-4">
            I'm always exploring new technologies and finding unique ways to solve complex problems, keeping a keen eye on the small details that make digital products feel premium and seamless.
          </p>
        </motion.div>
      </PanelContent>
    </>
  )
}
