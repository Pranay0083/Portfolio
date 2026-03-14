import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Stack } from "@/components/sections/Stack"
import { CodingProfiles } from "@/components/sections/CodingProfiles"
import { cn } from "@/lib/utils"

import { Panel, PanelContent } from "@/components/layout/Panel"

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-border/60",
        "before:absolute before:-left-[100vw] before:-z-10 before:h-8 before:w-[200vw]",
        "before:bg-stripes",
        className
      )}
    />
  )
}

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="w-full max-w-3xl mx-auto pt-14">
        
        <Panel id="hero">
          <PanelContent className="pb-12 pt-12">
            <Hero />
          </PanelContent>
        </Panel>

        <Separator />

        <Panel id="about">
          <About />
        </Panel>

        <Separator />

        <Panel id="experience">
          <Experience />
        </Panel>

        <Separator />

        <Panel id="projects">
          <Projects />
        </Panel>

        <Separator />

        <Panel id="coding-profiles">
          <CodingProfiles />
        </Panel>

        <Separator />

        <Panel id="stack">
          <Stack />
        </Panel>

      </main>

      <Footer />
    </>
  )
}
