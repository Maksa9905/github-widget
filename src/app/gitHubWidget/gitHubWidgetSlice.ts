import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GitHubWidgetTypes } from './types'
import { defaultLightTheme } from '#app/theme.ts'
import { RootState } from '../redux'

const initialState: GitHubWidgetTypes = {
  token: '',
  theme: defaultLightTheme,
}

const gutHubWidgetSlice = createSlice({
  name: 'gitHubWidget',
  initialState: initialState,
  reducers: {
    setWidgetProps(state, action: PayloadAction<GitHubWidgetTypes>) {
      state.token = action.payload.token
      state.theme = action.payload.theme
      state.translation = action.payload.translation
      state.width = action.payload.width
    },
  },
})

export const { setWidgetProps } = gutHubWidgetSlice.actions

export const selectToken = (state: RootState) => state.gitHubWidget.token
export const selectTheme = (state: RootState) => state.gitHubWidget.theme
export const selectTranslation = (state: RootState) =>
  state.gitHubWidget.translation

export const selectWidth = (state: RootState) => state.gitHubWidget.width

export const gitHubWidgetReducer = gutHubWidgetSlice.reducer
