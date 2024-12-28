import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Routes, RouterState } from './types'
import { RootState } from '../../app/redux'

const initialState: RouterState = {
  route: Routes.home,
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

export default routerSlice.reducer
