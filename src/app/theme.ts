export interface GitHubWidgetColorTheme {
  background: {
    backgroundColor: string
    backgroundIconColor: string
  }
  text: {
    nameColor: string
    statisticsColor: string
  }
  comboTooltip: {
    backgroundColor: string
    textColor: string
  }
  comboIndicator: string[]
}

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export const defaultLightTheme: GitHubWidgetColorTheme = {
  background: {
    backgroundColor: '#ffffff',
    backgroundIconColor: '#eeeeee',
  },
  text: {
    nameColor: '#000000',
    statisticsColor: '#3a3a3a',
  },
  comboTooltip: {
    backgroundColor: '#eeeeee',
    textColor: '#000000',
  },
  comboIndicator: ['#04ff00', '#ffd900', '#ff0000'],
}

export const defaultDarkTheme: GitHubWidgetColorTheme = {
  background: {
    backgroundColor: '#222222',
    backgroundIconColor: '#2d2d2d',
  },
  text: {
    nameColor: '#ffffff',
    statisticsColor: '#e1e1e1',
  },
  comboTooltip: {
    backgroundColor: '#161616',
    textColor: '#ffffff',
  },
  comboIndicator: ['#04ff00', '#ffd900', '#ff0000'],
}

export const defaultThemes: Record<ThemeType, GitHubWidgetColorTheme> = {
  [ThemeType.light]: defaultLightTheme,
  [ThemeType.dark]: defaultDarkTheme,
}
