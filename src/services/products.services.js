import { request } from "./api.services";

export const fetchProducts = () => request("get", "3003/products");
export const addProduct = (data) => request("post", "3003/products", data);
