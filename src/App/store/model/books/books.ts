import { normalizeBookItemModel } from "./bookItem";
import { BookItemApi, BookItemModel } from "./bookItem";

export type ItemApi = {
  items: BookItemApi[];
  totalItems: number;
};

export type ItemModel = {
  items: BookItemModel[];
  totalItems: number;
};

export const normalizeBooks = (from: ItemApi): ItemModel => {
  const items = from.totalItems
    ? from.items.map((item: BookItemApi) => normalizeBookItemModel(item))
    : [];
  return {
    totalItems: from.totalItems,
    items,
  };
};
