import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Routes, RouterState, routes } from './types'
import { RootState } from '../redux'

const initialState: RouterState = {
  route: routes.home,
}

const routerSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<Routes>) => {
      state.route = action.payload
    },
  },
})

export const { setRoute } = routerSlice.actions

export const selectRoute = (state: RootState) => state.routes.route

export const routerReducer = routerSlice.reducer
