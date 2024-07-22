import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./Features/UsersSlice/UsersSlice";
import InstitutionSlice from "./Features/InstitutionSlice/InstitutionSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import AdminSlice from "./Features/AdminSlice/AdminSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducers = combineReducers({
  userData: UsersSlice,
  institutionData: InstitutionSlice,
  adminData: AdminSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

// store

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getMiddleWare) =>
    getMiddleWare({
      serializableCheck: false,
    }),
});
