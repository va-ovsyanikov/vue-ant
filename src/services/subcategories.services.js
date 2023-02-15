import { request } from "./api.services";

export const fetchSubcategories = () => request("get", "3002/subcategories");
export const addSubcategories = (data) =>
  request("post", "3002/subcategories", data);
export const updateSubcategories = (data) =>
  request("patch", `3002/subcategories/${data.id}`, { title: data.title });
