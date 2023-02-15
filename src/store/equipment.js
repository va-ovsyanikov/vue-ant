import { defineStore } from "pinia";
import { notify } from "@kyvg/vue3-notification";
import {
  fetchCategories,
  addCategory,
  updateCategory,
} from "../services/category.services";
import {
  fetchSubcategories,
  addSubcategories,
  updateSubcategories,
} from "../services/subcategories.services";
import { fetchProducts, addProduct } from "../services/products.services";

export const useEquipment = defineStore("equipment", {
  state: () => ({
    categories: "",
    subcategories: "",
    products: "",
  }),
  actions: {
    async FETCH_CATEGORIES() {
      try {
        const response = await fetchCategories();
        this.categories = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async ADD_CATEGORY(data) {
      try {
        const response = await addCategory(data);
        this.categories.splice(0, 0, response.data);
        notify({
          type: "success",
          text: "Create category",
        });
      } catch (error) {
        notify({
          type: "error",
          text: "Error",
        });
      }
    },
    async UPDATE_CATEGORY(data) {
      try {
        const response = await updateCategory(data);
        const elem = response.data;
        const index = this.categories.findIndex((el) => el.id === elem.id);
        this.categories.splice(index, 1, elem);
        notify({
          type: "success",
          text: "Update category",
        });
      } catch (error) {
        notify({
          type: "error",
          text: "Error",
        });
      }
    },

    async FETCH_SUBCATEGORIES(id) {
      const response = await fetchSubcategories();
      const array = [];
      for (let item of response.data) {
        if (item.catId === +id) {
          array.push(item);
        }
      }
      this.subcategories = array;
    },
    async ADD_SUBCATEGORY(data) {
      try {
        const response = await addSubcategories(data);
        this.subcategories.push(response.data);
        notify({
          type: "success",
          text: "Create category",
        });
      } catch (error) {
        notify({
          type: "error",
          text: "Error",
        });
      }
    },

    async UPDATE_SUBCATEGORY(data) {
      try {
        const response = await updateSubcategories(data);
        const item = response.data;
        const index = this.subcategories.findIndex((el) => el.id === item.id);
        this.subcategories.splice(index, 1, item);
        notify({
          type: "success",
          text: "Update subcategory",
        });
      } catch (error) {
        notify({
          type: "error",
          text: "Error",
        });
      }
    },
    async ADD_PRODUCT(data) {
      try {
        const response = await addProduct(data);
        this.products.push(response.data);
        notify({
          type: "success",
          text: "Create product",
        });
      } catch (error) {
        notify({
          type: "error",
          text: "Error",
        });
      }
    },

    async FETCH_PRODUCTS(id) {
      try {
        const response = await fetchProducts();
        const array = [];
        for (let item of response.data) {
          if (item.subId === +id) {
            array.push(item);
          }
        }
        this.products = array;
      } catch (error) {
        notify({
          type: "error",
          text: "Error",
        });
      }
    },
  },

  getters: {
    GET_CATEGORIES: (state) => state.categories,
    GET_SUBCATEGORIES: (state) => state.subcategories,
    GET_PRODUCTS: (state) => state.products,
  },
});
