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