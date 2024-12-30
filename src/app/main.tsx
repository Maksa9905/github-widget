import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitHubWidget } from '#app/gitHubWidget'
import { ThemeType } from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GitHubWidget
      token={import.meta.env.VITE_GITHUB_ACCESS_TOKEN}
      defaultThemeType={ThemeType.dark}
    />
  </StrictMode>,
)
