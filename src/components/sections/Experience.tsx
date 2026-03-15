"use client"

import { motion } from "framer-motion"
import { PanelHeader, PanelTitle, PanelContent } from "@/components/layout/Panel"

const experiences = [
  {
    company: "Succesship",
    role: "Software Engineer Intern",
    period: "Jan 2025 - Nov 2025",
    description: `1. Resolved support issues by identifying and fixing bugs in production and staging environments.
2. Debugged and optimized existing codebases to improve performance and maintainability.
3. Developed a new product leveraging Generative AI, contributing to architecture, model integration, and feature development.
4. Collaborated with cross-functional teams to enhance product functionality and user experience.
5. Developed and implemented automation scripts to streamline repetitive development tasks and workflows.
`,
    tech: ["Software Development", "Problem Solving", "Full-Stack Development", "Database Management", "Agentic AI", "API Development", "Devops"]
  },
  {
    company: "Self employed",
    role: "Freelancer",
    period: "Feb 2026 - March 2026",
    description: "Developed high-performance full-stack interfaces that aggregate and visualize large-scale database metrics. Specialized in optimizing SQL queries and backend API responses to ensure data rendering on the frontend.",
    tech: ["Data Engineering", "API Development", "Full-Stack Development", "Database Management"]
  }
]

export function Experience() {
  return (
    <>
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="relative border-l border-border md:border-l-0 md:pl-0 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative md:grid md:grid-cols-4 gap-6 items-start"
            >
             {/* Timeline dot for mobile */}
             <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border border-border bg-background md:hidden" />
             
              <div className="md:col-span-1 text-sm text-muted-foreground font-mono md:text-right pt-0.5">
                {exp.period}
              </div>
              <div className="md:col-span-3 space-y-3 relative border-border md:pl-6 md:border-l">
                 {/* Timeline dot for desktop */}
                 <div className="hidden md:block absolute -left-[5.5px] top-2 h-2.5 w-2.5 rounded-full border border-border bg-background" />
                 
                <div>
                   <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                   <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description.includes('\n') ? (
                    <ul className="list-none space-y-2">
                      {exp.description.trim().split('\n').map((line, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-muted-foreground/40 shrink-0 font-mono text-[10px] pt-1">0{i + 1}</span>
                          <span>{line.replace(/^\d+\.\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
                {exp.tech.length > 0 && (
                   <div className="flex flex-wrap gap-2 pt-1">
                     {exp.tech.map((t) => (
                       <span key={t} className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-0.5 text-xs font-mono font-medium text-secondary-foreground">
                         {t}
                       </span>
                     ))}
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </PanelContent>
    </>
  )
}
