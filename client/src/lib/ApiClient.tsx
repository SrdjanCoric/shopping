import axios from "axios";
import * as routes from "../constants/ApiRoutes"
import { BaseProduct, Product, Cart } from "../types/types";


const apiClient = {
  getProducts: function (callback: (value: Product[]) => void) {
    return axios
      .get(routes.GET_PRODUCTS_URL)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  addProduct: function (product: BaseProduct, callback: (value: Product) => void) {
    return axios
      .post(routes.ADD_PRODUCT_URL, { ...product })
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  deleteProduct: function (id: string, callback: () => void) {
    return axios
      .delete(routes.deleteProduct(id))
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },

  updateProduct: function (id: string, product: BaseProduct, callback: (value: Product) => void) {
    return axios
      .put(routes.updateProduct(id), { ...product })
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  getCartItems: function (callback: (value: Cart[]) => void) {
    return axios
      .get(routes.GET_CART_ITEMS)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  addToCart: function (id: string, product: Product, callback: (value: Cart) => void) {
    return axios
      .post(routes.ADD_TO_CART, { productId: id, ...product })
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  checkout: function (callback: () => void) {
    return axios
      .post(routes.CHECKOUT)
      .then((response) => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
};

export default apiClient;
