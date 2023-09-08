import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import ApiStore from "@src/App/http";

import { BookModal, normalizeBook } from "../model/book";

export const getOrganizationBook = createAsyncThunk(
  "book",
  async (id: string) => {
    const response = await ApiStore.getBook(id);
    return response.data;
  },
);

export enum Meta {
  idle = "idle",
  loading = "loading",
  failed = "failed",
}

interface IBookState {
  error: SerializedError | null;
  book: BookModal;
  loadingStatus: Meta;
}

const initialState: IBookState = {
  loadingStatus: Meta.idle,
  error: null,
  book: {
    authors: "",
    img: "",
    title: "",
    categories: "",
    description: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizationBook.pending, (state) => {
        state.loadingStatus = Meta.loading;
        state.error = null;
      })
      .addCase(getOrganizationBook.fulfilled, (state, action) => {
        const normalizeData = normalizeBook(action.payload);
        state.book = normalizeData;
        state.loadingStatus = Meta.idle;
        state.error = null;
      })
      .addCase(getOrganizationBook.rejected, (state, action) => {
        state.loadingStatus = Meta.failed;
        state.error = action.error;
      });
  },
});

//export const { } = booksSlice.actions;
export default bookSlice.reducer;
