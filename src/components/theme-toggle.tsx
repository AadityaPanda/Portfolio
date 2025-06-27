"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder to avoid hydration mismatch and layout shift
    return <div className="h-6 w-11 rounded-full bg-muted" />
  }

  const isDarkMode = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring 
        focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${isDarkMode ? 'bg-primary' : 'bg-input'}
      `}
    >
      <span
        className={`
          pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-background shadow-lg ring-0 
          transition-transform duration-300 ease-in-out
          ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}
        `}
      >
        {/* Sun Icon for Light Mode */}
        <span
          className={`
            absolute inset-0 flex h-full w-full items-center justify-center 
            transition-opacity duration-200 ease-in-out
            ${isDarkMode ? 'opacity-0 ease-out' : 'opacity-100 ease-in'}
          `}
          aria-hidden="true"
        >
          <Sun className="h-3 w-3 text-amber-500" />
        </span>
        {/* Moon Icon for Dark Mode */}
        <span
          className={`
            absolute inset-0 flex h-full w-full items-center justify-center 
            transition-opacity duration-200 ease-in-out
            ${isDarkMode ? 'opacity-100 ease-in' : 'opacity-0 ease-out'}
          `}
          aria-hidden="true"
        >
          <Moon className="h-3 w-3 text-primary" />
        </span>
      </span>
    </button>
  )
}
