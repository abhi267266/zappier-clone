/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React from 'react';
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until the component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Avoid rendering until the component is mounted
  }

  // Toggle between light and dark themes
  const handleToggle = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={handleToggle}
    >
      <div className="flex justify-center items-center">
        <Sun
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            resolvedTheme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
            resolvedTheme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
