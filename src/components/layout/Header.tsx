"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Search, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/#projects" },
  { name: "Experience", path: "/#experience" },
  { name: "Contact", path: "/#contact" },
]

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full max-w-3xl inset-x-0 mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-x border-border/60 screen-line-before screen-line-after">
      <div className="flex h-14 items-center justify-between px-6">
        {/* Navigation Links */}
        <nav className="flex items-center gap-4 text-sm font-mono">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "transition-colors hover:text-foreground",
                pathname === item.path || (pathname === '/' && item.path === '/') ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Mock Search / Command Palette Toggle */}
          <button
            className="flex h-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground px-2 text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            aria-label="Search"
          >
            <span className="hidden sm:inline-block mr-2">Search...</span>
            <kbd className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
            <Search className="h-4 w-4 sm:hidden" />
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 flex items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
