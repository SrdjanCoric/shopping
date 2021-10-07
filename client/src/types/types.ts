export interface BaseProduct {
  title: string,
  price: number,
  quantity: number
}

export interface Product extends BaseProduct {
  _id: string,
}


export interface Cart extends BaseProduct {
  _id: string,
  productId: string,
  createdAt: Date,
  updatedAt: Date
}


export type ProductContextState = {
  products: Product[],
}

export type ProductContextDispatch = {
  getProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  updateProduct: (product: Product) => void;
  addProductToCart: (productId: string) => void;
}

export type CartContextState = {
  cart: Cart[],
}

export type CartContextDispatch = {
  addItemToCart: (cartItem: Cart) => void;
  checkout: () => void;
  getCartItems: (cartItems: Cart[]) => void
}