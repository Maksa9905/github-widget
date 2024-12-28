import { createTheme } from '#shared/ui'

const defaultFont = {
  fontFamily: 'Roboto, sans-serif',
  h1: {
    fontSize: '50px',
    lineHeight: '54px',
  },
  h2: {
    fontSize: '32px',
    lineHeight: '34px',
  },
  h3: {
    fontSize: '25px',
    lineHeight: '30px',
  },
  h4: {
    fontSize: '17px',
    lineHeight: '22px',
  },
  h5: {
    fontSize: '14px',
    lineHeight: '14px',
  },
}

const textFont = {
  fontFamily: 'Roboto, sans-serif',
}

const codeFont = {
  fontFamily: 'Spot Mono, monospace',
}

const lightPalette = {
  primary: {
    main: 'rgb(36, 213, 48)',
    light: 'rgb(129, 247, 137)',
    dark: 'rgb(23, 148, 31)',
    contrastText: '#ffffff',
  },
  secondary: {
    main: 'rgb(41, 96, 213)',
    light: 'rgb(104, 138, 211)',
    dark: 'rgb(34, 79, 177)',
    contrastText: '#ffffff',
  },
  error: {
    main: 'rgb(255, 0, 0)',
    light: 'rgb(255, 100, 100)',
    dark: 'rgb(200, 0, 0)',
    contrastText: '#ffffff',
  },
  warning: {
    main: 'rgb(255, 255, 0)',
    light: 'rgb(255, 255, 100)',
    dark: 'rgb(200, 200, 0)',
    contrastText: '#ffffff',
  },
  info: {
    main: 'rgb(0, 255, 255)',
    light: 'rgb(100, 255, 255)',
    dark: 'rgb(0, 200, 200)',
    contrastText: '#ffffff',
  },
  success: {
    main: 'rgb(0, 255, 0)',
    light: 'rgb(100, 255, 100)',
    dark: 'rgb(0, 200, 0)',
    contrastText: '#ffffff',
  },
  background: {
    default: 'rgb(255, 255, 255)',
    paper: 'rgb(219, 219, 219)',
  },
  text: {
    primary: 'rgb(0, 0, 0)',
    secondary: 'rgb(163, 163, 163)',
  },
  divider: 'rgb(37, 37, 37)',
  action: {
    active: 'rgb(0, 0, 0)',
    hover: 'rgb(0, 0, 0)',
    selected: 'rgb(0, 0, 0)',
    disabled: 'rgb(0, 0, 0)',
    disabledBackground: 'rgb(0, 0, 0)',
    focus: 'rgb(0, 0, 0)',
  },
  common: {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
}

const darkPalette = {
  primary: {
    main: 'rgb(36, 213, 48)',
    light: 'rgb(129, 247, 137)',
    dark: 'rgb(23, 148, 31)',
    contrastText: '#ffffff',
  },
  secondary: {
    main: 'rgb(41, 96, 213)',
    light: 'rgb(104, 138, 211)',
    dark: 'rgb(34, 79, 177)',
    contrastText: '#ffffff',
  },
  error: {
    main: 'rgb(255, 0, 0)',
    light: 'rgb(255, 100, 100)',
    dark: 'rgb(200, 0, 0)',
    contrastText: '#ffffff',
  },
  warning: {
    main: 'rgb(255, 255, 0)',
    light: 'rgb(255, 255, 100)',
    dark: 'rgb(200, 200, 0)',
    contrastText: '#ffffff',
  },
  info: {
    main: 'rgb(0, 255, 255)',
    light: 'rgb(100, 255, 255)',
    dark: 'rgb(0, 200, 200)',
    contrastText: '#ffffff',
  },
  success: {
    main: 'rgb(0, 255, 0)',
    light: 'rgb(100, 255, 100)',
    dark: 'rgb(0, 200, 0)',
    contrastText: '#ffffff',
  },
  background: {
    default: 'rgb(28, 28, 28)',
    paper: 'rgb(46, 46, 46)',
  },
  text: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(163, 163, 163)',
  },
  divider: 'rgb(37, 37, 37)',
  action: {
    active: 'rgb(0, 0, 0)',
    hover: 'rgb(0, 0, 0)',
    selected: 'rgb(0, 0, 0)',
    disabled: 'rgb(0, 0, 0)',
    disabledBackground: 'rgb(0, 0, 0)',
    focus: 'rgb(0, 0, 0)',
  },
  common: {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
}

export const lightTextTheme = createTheme({
  palette: lightPalette,
  typography: {
    ...defaultFont,
    ...textFont,
  },
})

export const darkTextTheme = createTheme({
  palette: darkPalette,
  typography: {
    ...defaultFont,
    ...textFont,
  },
})

export const lightCodeTheme = createTheme({
  palette: lightPalette,
  typography: {
    ...defaultFont,
    ...codeFont,
  },
})

export const darkCodeTheme = createTheme({
  palette: darkPalette,
  typography: {
    ...defaultFont,
    ...codeFont,
  },
})
