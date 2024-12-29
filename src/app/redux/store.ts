import { configureStore } from '@reduxjs/toolkit'
import { routerReducer } from '#app/router'
import { gitHubWidgetReducer } from '#app/gitHubWidget'

export const store = configureStore({
  reducer: {
    gitHubWidget: gitHubWidgetReducer,
    routes: routerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
