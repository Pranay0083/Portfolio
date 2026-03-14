"use client"

import { motion } from "framer-motion"
import { PanelHeader, PanelTitle, PanelContent } from "@/components/layout/Panel"

const experiences = [
  {
    company: "Succesship",
    role: "Software Engineer",
    period: "Jan 2025 - Present",
    description: "Contributing to software development projects, likely focusing on full-stack development and problem-solving.",
    tech: ["Software Development", "Problem Solving"]
  },
  {
    company: "Newton School of Technology",
    role: "B.Tech in Computer Science",
    period: "July 2024 - Present",
    description: "Pursuing a Bachelor's degree in Computer Science and AI. Maintaing a CGPA of 7.1.",
    tech: ["Computer Science", "AI", "Data Structures", "Algorithms"]
  },
  {
    company: "Stuzee",
    role: "Full Stack Developer",
    period: "Jan 2025 - Present",
    description: "Developing a comprehensive learning management system to streamline educational processes and enhance student engagement.",
    tech: ["TypeScript", "Next.js", "React"]
  },
  {
    company: "Open Source",
    role: "Contributor",
    period: "2024 - Present",
    description: "Actively contributing to various open-source projects including browser extensions, system tools, and educational platforms.",
    tech: ["JavaScript", "Python", "C++"]
  },
  {
    company: "Think Box",
    role: "Frontend Developer",
    period: "Late 2024",
    description: "Built the frontend for an e-learning platform, focusing on user experience and interactive content delivery.",
    tech: ["JavaScript", "React", "Node.js"]
  },
  {
    company: "University Projects",
    role: "Student Developer",
    period: "2023 - 2024",
    description: "Worked on diverse projects including a CPU scheduler visualizer, contest calendars, and computer vision experiments.",
    tech: ["TypeScript", "Python", "Algorithms"]
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
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
