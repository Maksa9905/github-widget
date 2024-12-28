import { ThemeProvider } from '@mui/material'
import { ThemeType, useLocalStorage } from '../storage'
import { darkTextTheme, lightTextTheme } from './theme'

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { storage } = useLocalStorage()

  const theme =
    storage.theme === ThemeType.light ? lightTextTheme : darkTextTheme

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
