import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import searchReducer from './features/searchSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
})

export default store
