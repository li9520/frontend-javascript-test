import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import bookReducer from "./bookSlice";
import booksReducer from "./booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
