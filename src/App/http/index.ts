import { BASE_URL, API_KEY } from "@const/api";
import axios from "axios";

const $host = axios.create({
  baseURL: BASE_URL,
});

export default class ApiStore {
  static async getAll(params = {}) {
    return await $host.get("books/v1/volumes", {
      params: { ...params, key: API_KEY },
    });
  }
  static async getBook(id: string) {
    return await $host.get(`books/v1/volumes/${id}`, {
      params: { key: API_KEY },
    });
  }
}
