import { createContext, useCallback, useState, FC } from "react";
import {Product,  ProductContextState, ProductContextDispatch} from "../types/types"

const defaultStateValue: ProductContextState = {
  products: [],
};
const defaultDispatchValue: ProductContextDispatch = {
  getProducts: () => undefined,
  addProduct: () => undefined,
  deleteProduct: () => undefined,
  updateProduct: () => undefined,
  addProductToCart: () => undefined,
};

export const ProductStateContext = createContext<ProductContextState>(defaultStateValue);
export const ProductDispatchContext = createContext<ProductContextDispatch>(defaultDispatchValue);

export const ProductProvider: FC = ({children}) => {
  const [products, setProducts] = useState<Product[]>(defaultStateValue.products);

  const getProducts = useCallback(
    (data: Product[]) => {
      setProducts(() => {
        return data;
        })
    },
    [setProducts]
  );

  const addProduct = useCallback(
    (data: Product) => {
      setProducts((currentProducts) => {
        return [...currentProducts, data];
      });
    },
    [setProducts]
  );

  const deleteProduct = useCallback(
    (data: string) => {
      setProducts((currentProducts) => {
        return currentProducts.filter(p => p._id !== data)
      });
    },
    [setProducts]
  );

  const updateProduct = useCallback(
    (data: Product) => {
      setProducts((currentProducts) => {
        return currentProducts.map(p => {
          if (p._id === data._id) {
            return {...data}
          } else {
            return p;
          }
        })
      });
    },
    [setProducts]
  );

  const addProductToCart = useCallback(
    (data: string) => {
      setProducts((currentProducts) => {
        return currentProducts.map(p => {
          if (p._id === data) {
            if (p.quantity === 0) {
              return p;
            }
            return {...p, quantity: p.quantity - 1}
          } else {
            return p;
          }
        })
      });
    },
    [setProducts]
  );

  return (
    <ProductDispatchContext.Provider
      value={{
        getProducts,
        addProduct,
        deleteProduct,
        updateProduct,
        addProductToCart
      }}
    >
      <ProductStateContext.Provider
        value={{
          products,
        }}
      >
        {children}
      </ProductStateContext.Provider>
    </ProductDispatchContext.Provider>
  );
};