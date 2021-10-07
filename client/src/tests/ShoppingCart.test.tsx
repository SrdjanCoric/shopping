import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import {Cart} from "../types/types"
import userEvent from "@testing-library/user-event";
import ShoppingCart from "../components/ShoppingCart";

describe("ShoppingCart", () => {
  describe("single item in cart", () => {
    const cartItem1: Cart = {
      _id: "some id",
      title: "Fancy Gentlemans Jacket",
      quantity: 1,
      price: 150,
      productId: "product id",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    let func: jest.Mock;
    beforeEach(() => {
      func = jest.fn();
      render(<ShoppingCart cart={[cartItem1]} onCheckout={func} />);
    });

    it("renders 1 `CartItem` per item in cart", () => {
      let cartItems = within(screen.getByTestId("table")).getAllByTestId(
        "cartItem"
      );
      expect(cartItems.length).toBe(1);
    });

    it("has correct total", () => {
      const td = screen.getByText(/Total:/);
      expect(td).toHaveTextContent("Total: $150")
    });
  })

    describe("then adds another item to cart", () => {
      const cartItem1: Cart = {
        _id: "some id",
        title: "Fancy Gentlemans Jacket",
        quantity: 1,
        price: 150,
        productId: "product id",
        createdAt: new Date(),
        updatedAt: new Date()
      };
      const cartItem2: Cart = {
        _id: "some id2",
        title: "Nook",
        quantity: 4,
        price: 200,
        productId: "product id2",
        createdAt: new Date(),
        updatedAt: new Date()
      };
      let func;
      beforeEach(() => {
        func = jest.fn();
        render(<ShoppingCart cart={[cartItem1, cartItem2]} onCheckout={func} />);
      });

      it("renders 1 `CartItem` per item in cart", () => {
        let cartItems = within(screen.getByTestId("table")).getAllByTestId(
          "cartItem"
        );
        expect(cartItems.length).toBe(2);
      });

      it("has correct total", () => {
        const td = screen.getByText(/Total:/);
        const total = (cartItem1.price*cartItem1.quantity + cartItem2.price*cartItem2.quantity).toFixed(2)
        expect(td).toHaveTextContent(`Total: $${total}`)
      });
    });
});
