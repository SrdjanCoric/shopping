import { createContext, useCallback, useState, FC } from "react";
import {Cart, CartContextState, CartContextDispatch} from "../types/types"

const defaultStateValue: CartContextState = {
  cart: [],
};
const defaultDispatchValue: CartContextDispatch = {
  checkout: () => undefined,
  addItemToCart: () => undefined,
  getCartItems: () => undefined,
};

export const CartStateContext = createContext<CartContextState>(defaultStateValue);
export const CartDispatchContext = createContext<CartContextDispatch>(defaultDispatchValue);

export const CartProvider: FC = ({children}) => {
  const [cart, setCart] = useState<Cart[]>(defaultStateValue.cart);

  const checkout = useCallback(
    () => {
      setCart(() => {
        return [];
      });
    },
    [setCart]
  );

  const getCartItems = useCallback(
    (data: Cart[]) => {
      setCart(() => {
       return data;
      });
    },
    [setCart]
  );


  const addItemToCart = useCallback(
    (data: Cart) => {
      setCart((currentItems) => {
        const cartItem: Cart | undefined = currentItems.find(c => c._id === data._id);
        if (cartItem) {
          return currentItems.map(c => {
            if (c._id === data._id) {
              return {...c, quantity: c.quantity + 1}
            } else {
              return c;
            }
          })
        } else {
          return currentItems.concat(data)
        }
      });
    },
    [setCart]
  );


  return (
    <CartDispatchContext.Provider
      value={{
        checkout,
        addItemToCart,
        getCartItems,
      }}
    >
      <CartStateContext.Provider
        value={{
          cart,
        }}
      >
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};