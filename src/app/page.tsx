import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Stack } from "@/components/sections/Stack"
import { CodingProfiles } from "@/components/sections/CodingProfiles"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto flex flex-col items-center">
        <div className="w-full max-w-4xl px-4 md:px-8 space-y-8">
           <Hero />
           <About />
           <Experience />
           <Projects />
           <CodingProfiles />
           <Stack />
        </div>
      </main>
      <Footer />
    </div>
  )
}
