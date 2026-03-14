"use client"

import { motion } from "framer-motion"

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
    <section id="experience" className="py-12 md:py-16 space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
      <div className="relative border-l border-border md:border-l-0 md:pl-0 pl-6 md:space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative md:grid md:grid-cols-5 gap-4 md:items-baseline mb-12 md:mb-0"
          >
           {/* Timeline dot for mobile */}
           <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border border-primary bg-background md:hidden" />
           
            <div className="md:col-span-1 text-sm text-muted-foreground md:text-right font-mono">
              {exp.period}
            </div>
            <div className="md:col-span-4 space-y-2 border-l md:border-l border-transparent md:pl-4 relative">
               {/* Timeline dot for desktop */}
               <div className="hidden md:block absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
               
              <h3 className="text-lg font-semibold">{exp.role} · {exp.company}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-prose">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
