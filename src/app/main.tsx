import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitHubWidget } from '#app/gitHubWidget'
import { ThemeType } from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GitHubWidget
      token="123"
      defaultThemeType={ThemeType.dark}
    />
  </StrictMode>,
)
