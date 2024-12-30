import { useCallback, useEffect, useState } from 'react'
import { useCallbackRef } from '../utils/useCallbackRef'

export type Theme = 'dark' | 'light'

export const useTheme = () => {
  const [theme, _setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      _setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const toggleTheme = useCallbackRef(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    _setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  });

  const setTheme = useCallback((theme?: Theme | 'auto') => {
    if (theme === 'auto' || !theme) {
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = isDarkMode ? 'dark' : 'light';
    }
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, []);

  return {
    theme,
    toggleTheme,
    setTheme,
  }
}