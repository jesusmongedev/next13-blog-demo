import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'dark' ? 'light' : 'dark'

  const icon = currentTheme === 'dark' ? <SunIcon className='h-5 w-5 text-orange-300' /> : <MoonIcon className='h-5 w-5 text-orange-300' />

  const toggleTheme = () => {
    setTheme(currentTheme)
  }

  return (
    <button onClick={toggleTheme}>{icon}</button>
  )
}
