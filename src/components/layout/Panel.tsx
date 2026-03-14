import * as React from "react"
import { cn } from "@/lib/utils"

export function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "screen-line-before screen-line-after border-x border-border/60",
        className
      )}
      {...props}
    />
  )
}

export function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("screen-line-after px-4 py-3 sm:px-6", className)}
      {...props}
    />
  )
}

export function PanelTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

export function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-4 sm:p-6", className)} {...props} />
}
