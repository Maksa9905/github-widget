import { GitHubWidgetColorTheme, ThemeType } from '#app/theme.ts'

export interface GitHubWidgetProps<
  WithDefaultTheme extends ThemeType | undefined,
> {
  token: string
  theme?: WithDefaultTheme extends undefined
    ? GitHubWidgetColorTheme
    : undefined
  defaultThemeType?: WithDefaultTheme
  width?: number
  translation?: Language
}

export type GitHubWidgetTypes = Omit<
  GitHubWidgetProps<ThemeType.light>,
  'theme' | 'defaultThemeType'
> & {
  theme: GitHubWidgetColorTheme
}

export enum Language {
  en = 'en',
  ru = 'ru',
}
