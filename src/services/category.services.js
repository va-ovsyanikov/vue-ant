import { request } from "./api.services";

export const fetchCategories = () => request("get", "3001/catalog");
export const addCategory = (data) => request("post", "3001/catalog", data);
export const updateCategory = (data) =>
  request("patch", `3001/catalog/${data.id}`, { title: data.title });
