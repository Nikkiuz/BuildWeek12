import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import searchReducer from "./features/searchSlice";
import postsReducer from "./reducers/postReducer";
import experiencesReducer from "./reducers/experiencesReduces";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer", "searchReducer"],
};

const allReducers = combineReducers({
  userReducer,
  searchReducer,
  postsReducer,
  experiencesReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
