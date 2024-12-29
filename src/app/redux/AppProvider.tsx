import { defaultThemes, ThemeType } from '#app/theme.ts'
import { useAppDispatch } from '#shared/hooks'
import {
  GitHubWidgetProps,
  GitHubWidgetTypes,
  setWidgetProps,
} from '#app/gitHubWidget'

export type AppProviderProps<WithDefaultTheme extends ThemeType | undefined> =
  GitHubWidgetProps<WithDefaultTheme> & {
    children: React.ReactNode
  }

export const AppProvider = <WithDefaultTheme extends ThemeType | undefined>({
  children,
  ...props
}: AppProviderProps<WithDefaultTheme>) => {
  const dispatch = useAppDispatch()

  const {
    defaultThemeType,
    token,
    theme: propTheme,
    width,
    translation,
  } = props

  const defaultTheme = defaultThemes[defaultThemeType || ThemeType.light]
  const theme = propTheme || defaultTheme

  const gitHubWidget: GitHubWidgetTypes = {
    token,
    theme,
    width,
    translation,
  }

  dispatch(setWidgetProps(gitHubWidget))

  return children
}
