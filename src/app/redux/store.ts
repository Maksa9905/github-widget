import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { routerReducer } from '#app/router'
import { gitHubWidgetReducer } from '#app/gitHubWidget'
import { baseApi } from '#shared/api/baseApi.ts'

export const store = configureStore({
  reducer: combineReducers({
    gitHubWidget: gitHubWidgetReducer,
    routes: routerReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
