import { useTheme } from 'next-themes'
import { IconSun, IconMoon } from '@tabler/icons-react'
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

  const icon = currentTheme === 'dark' ? <IconSun className='h-5 sm:h-7 text-orange-300' /> : <IconMoon className='h-5 sm:h-7 text-orange-300' />

  const toggleTheme = () => {
    setTheme(currentTheme)
  }

  return (
    <div className='flex'>
      <button onClick={toggleTheme}>{icon}</button>
    </div>
  )
}
