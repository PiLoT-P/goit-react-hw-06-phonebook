import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo/todoSlice';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistTodoConfig = {
    key: 'contacts',
    storage,
}

const persistTodoReducer = persistReducer(persistTodoConfig, todoReducer)

export const store = configureStore({
    reducer: {
        todo: persistTodoReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);