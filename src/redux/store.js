import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import searchReducer from "./reducers/searchReducer";
import postsReducer from "./reducers/postReducer";
import experiencesReducer from "./reducers/experiencesReduces";
import commentsReducer from "./reducers/commentsReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({
  userReducer,
  searchReducer,
  postsReducer,
  experiencesReducer,
  commentsReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
