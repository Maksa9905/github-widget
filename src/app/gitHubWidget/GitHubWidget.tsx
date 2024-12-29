import { Router } from '#app/router'
import { AppProvider, store } from '#app/redux'
import { ThemeType } from '#app/theme.ts'
import { GitHubWidgetProps } from '#app/gitHubWidget/types'
import { Provider } from 'react-redux'

export const GitHubWidget = <WithDefaultTheme extends ThemeType | undefined>(
  props: GitHubWidgetProps<WithDefaultTheme>,
) => {
  return (
    <Provider store={store}>
      <AppProvider {...props}>
        <Router />
      </AppProvider>
    </Provider>
  )
}
