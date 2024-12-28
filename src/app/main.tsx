import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeWrapper } from './styles'
import { Router } from './router'
import { Provider } from 'react-redux'
import { store } from './redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeWrapper>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeWrapper>
  </StrictMode>,
)
