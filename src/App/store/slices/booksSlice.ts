import ApiStore from "@app/http";
import { CATEGORY_OPTIONS, SORTED_OPTIONS } from "@const/form";
import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { normalizeBooks } from "@store/model/books/books";

import { RootState } from ".";
import { Meta } from "./bookSlice";
import { BookItemModel } from "../model/books";
interface IParams {
  q?: string;
  category?: string;
  orderBy?: string;
  maxResults?: number;
  startIndex?: number;
}
export const getOrganizationBooksList = createAsyncThunk(
  "books",
  async (params: IParams) => {
    const { category, ...searchParams } = params;
    const categorySortingParameter =
      category === "all" ? "" : `+subject:${category}`;
    const query = `${params.q}${categorySortingParameter}`;
    const response = await ApiStore.getAll({ ...searchParams, q: query });
    return response.data;
  },
);

const booksAdapter = createEntityAdapter<BookItemModel>({
  selectId: (book) => book.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = booksAdapter.getInitialState({
  loadingStatus: Meta.idle,
  page: 0,
  totalItems: 0,
  activeFilters: {
    q: `""`,
    category: CATEGORY_OPTIONS[0].value,
    orderBy: SORTED_OPTIONS[0].value,
  },
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    setFilters: (state, action) => {
      state.activeFilters = {
        q: `"${action.payload.query}"`,
        orderBy: action.payload.orderBy,
        category: action.payload.category,
      };
      state.page = 0;
      booksAdapter.removeAll(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizationBooksList.pending, (state) => {
        state.loadingStatus = Meta.loading;
      })
      .addCase(getOrganizationBooksList.fulfilled, (state, action) => {
        const normalizeData = normalizeBooks(action.payload);
        booksAdapter.setAll(state, normalizeData.items);
        state.totalItems = normalizeData.totalItems;
        state.loadingStatus = Meta.idle;
      })
      .addCase(getOrganizationBooksList.rejected, (state, action) => {
        state.loadingStatus = Meta.failed;
      });
  },
});

export const booksSelector = booksAdapter.getSelectors(
  (state: RootState) => state.books,
);
export const { nextPage, setFilters } = booksSlice.actions;
export default booksSlice.reducer;
