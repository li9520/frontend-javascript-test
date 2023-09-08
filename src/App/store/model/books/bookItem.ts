import img from "@src/App/img/defaultImage.jpeg";
export type BookItemApi = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      smallThumbnail: string;
    };
    categories?: string[];
  };
};

export type BookItemModel = {
  id: string;
  image: string;
  title: string;
  author: string;
  category?: string;
};

export const normalizeBookItemModel = (from: BookItemApi): BookItemModel => {
  return {
    id: from.id,
    title: from.volumeInfo.title,
    author: from.volumeInfo.authors?.join(", ") || "",
    image: from.volumeInfo.imageLinks?.smallThumbnail || img,
    category: from.volumeInfo?.categories?.[0] || "",
  };
};
