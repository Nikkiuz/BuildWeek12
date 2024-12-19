import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import searchReducer from "./features/searchSlice";
import postsReducer from "./reducers/postReducer";
import experiencesReducer from "./reducers/experiencesReduces";

const allReducers = combineReducers({
  userReducer,
  searchReducer,
  postsReducer,
  experiencesReducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
