import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import cartReducer from "./cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const userPersistConfig = {
  key: "currentUser",
  version: 1,
  storage
}
const cartPersistConfig = {
  key: "cart",
  version: 1,
  storage
}
const persistedUserReducer = persistReducer(userPersistConfig, userReducer)
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)


const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    cart: persistedCartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
export default store;