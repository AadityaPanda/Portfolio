"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const isMobile = useIsMobile();

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-10 w-10 rounded-md bg-muted" />;
  }
  
  const isDarkMode = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  // Mobile view: Simple icon button
  if (isMobile) {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="h-9 w-9"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    )
  }

  // Desktop view: Slider-style switch
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
