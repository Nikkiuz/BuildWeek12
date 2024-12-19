import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import searchReducer from './features/searchSlice'

const allReducers = combineReducers({ userReducer, searchReducer })

const store = configureStore({
  reducer: allReducers,
})

export default store
