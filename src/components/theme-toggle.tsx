"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder to avoid hydration mismatch and layout shift
    return (
        <div className="flex items-center space-x-2 h-10 w-[96px]" />
    )
  }

  const isDarkMode = resolvedTheme === "dark"

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-5 w-5 transition-colors ${
          !isDarkMode ? "text-amber-500" : "text-muted-foreground"
        }`}
      />
      <Switch
        checked={isDarkMode}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <Moon
        className={`h-5 w-5 transition-colors ${
          isDarkMode ? "text-primary" : "text-muted-foreground"
        }`}
      />
    </div>
  )
}
