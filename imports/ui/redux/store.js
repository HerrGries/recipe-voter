import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api'

const rootReducer = combineReducers({
  "api": api.reducer,
})

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
  })
}