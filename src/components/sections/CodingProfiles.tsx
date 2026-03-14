"use client"

import { motion } from "framer-motion"
import { Code, Trophy, Terminal, BarChart2, ShieldCheck } from "lucide-react"

const profiles = [
  {
    name: "LeetCode",
    description: "Solved 250+ DSA problems. Strong in DP & Backtracking.",
    link: "https://leetcode.com/u/Pranay0083/",
    Icon: Code,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    stats: "Rank 559k+"
  },
  {
    name: "GeeksforGeeks",
    description: "Consistent problem solver. Institute Rank 1.",
    link: "https://www.geeksforgeeks.org/profile/pranay0083",
    Icon: Terminal,
    color: "text-green-600",
    bg: "bg-green-600/10",
    stats: "Coding Score"
  },
  {
    name: "HackerRank",
    description: "5-Star in Problem Solving, Python, C++, Java.",
    link: "https://www.hackerrank.com/profile/0083pranay",
    Icon: Trophy,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    stats: "5-Star Badges"
  },
   {
    name: "Kaggle",
    description: "Data Science enthusiast. Working on competitions & notebooks.",
    link: "https://www.kaggle.com/pranayvishwakarma",
    Icon: BarChart2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    stats: "Kaggle Contributor"
  },
  {
    name: "TryHackMe",
    description: "Learning Cybersecurity. Exploring detailed writeups.",
    link: "https://tryhackme.com/p/Pranay0083",
    Icon: ShieldCheck,
    color: "text-red-500",
    bg: "bg-red-500/10",
    stats: "Top 14%"
  }
]

export function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-12 md:py-16 space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Coding Profiles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group block p-6 rounded-lg border bg-card hover:border-primary/50 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg ${profile.bg} ${profile.color}`}>
                <profile.Icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-mono font-medium opacity-70 bg-secondary px-2 py-1 rounded-full">{profile.stats}</span>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">{profile.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{profile.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
