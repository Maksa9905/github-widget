import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitHubWidget } from '#app/gitHubWidget'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GitHubWidget token="123" />
  </StrictMode>,
)
