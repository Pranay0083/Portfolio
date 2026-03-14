"use client"

import { motion } from "framer-motion"
import { Code, Trophy, Terminal, BarChart2, ShieldCheck, ArrowRight } from "lucide-react"
import { PanelHeader, PanelTitle, PanelContent } from "@/components/layout/Panel"

const profiles = [
  {
    name: "LeetCode",
    description: "Solved 250+ DSA problems. Strong in DP & Backtracking.",
    link: "https://leetcode.com/u/Pranay0083/",
    Icon: Code,
    stats: "Rank 559k+"
  },
  {
    name: "GeeksforGeeks",
    description: "Consistent problem solver. Institute Rank 1.",
    link: "https://www.geeksforgeeks.org/profile/pranay0083",
    Icon: Terminal,
    stats: "Coding Score"
  },
  {
    name: "HackerRank",
    description: "5-Star in Problem Solving, Python, C++, Java.",
    link: "https://www.hackerrank.com/profile/0083pranay",
    Icon: Trophy,
    stats: "5-Star Badges"
  },
   {
    name: "Kaggle",
    description: "Data Science enthusiast. Working on competitions & notebooks.",
    link: "https://www.kaggle.com/pranayvishwakarma",
    Icon: BarChart2,
    stats: "Kaggle Contributor"
  },
  {
    name: "TryHackMe",
    description: "Learning Cybersecurity. Exploring detailed writeups.",
    link: "https://tryhackme.com/p/Pranay0083",
    Icon: ShieldCheck,
    stats: "Top 14%"
  }
]

export function CodingProfiles() {
  return (
    <>
      <PanelHeader>
        <PanelTitle>Coding Profiles</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <div className="flex flex-col gap-3">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-border bg-background hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                 <div className="p-2.5 rounded-lg bg-secondary/50 text-foreground group-hover:bg-background transition-colors border border-transparent group-hover:border-border">
                   <profile.Icon className="h-5 w-5" />
                 </div>
                 <div>
                    <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                       {profile.name}
                       <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-muted-foreground" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{profile.description}</p>
                 </div>
              </div>
              
              <div className="sm:text-right ml-13 sm:ml-0">
                 <span className="text-xs font-mono font-medium bg-secondary px-2 py-1 rounded-md text-secondary-foreground whitespace-nowrap">
                   {profile.stats}
                 </span>
              </div>
            </motion.a>
          ))}
        </div>
      </PanelContent>
    </>
  )
}
