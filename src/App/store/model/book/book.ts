import img from "@src/App/img/defaultImage.jpeg";

export type BookApi = {
  volumeInfo: {
    authors?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
    title: string;
    description: string;
    categories?: string[];
  };
};

export type BookModal = {
  authors?: string;
  img: string;
  title: string;
  categories?: string;
  description: string;
};

export const normalizeBook = (from: BookApi): BookModal => ({
  authors: from?.volumeInfo.authors?.join(", "),
  img: from.volumeInfo.imageLinks?.thumbnail || img,
  title: from.volumeInfo.title,
  categories: from.volumeInfo.categories?.join(", "),
  description: from.volumeInfo.description,
});
