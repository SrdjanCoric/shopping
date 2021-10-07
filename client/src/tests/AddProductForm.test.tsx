import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import AddProductForm from "../components/AddProductForm";

describe("AddProductForm", () => {

  let func : jest.Mock;
  describe("empty form inputs", () => {
    beforeEach(() => {
    func = jest.fn();
    render(<AddProductForm onAddProduct={func} />);
    });

    it("has title input", () => {
      expect(
        screen.getByRole("textbox", { name: "Product Name" })
      ).toBeInTheDocument();
    });

    it("has price input", () => {
      expect(
        screen.getByRole("textbox", { name: "Price" })
      ).toBeInTheDocument();
    });

    it("has quantity input", () => {
      expect(
        screen.getByRole("textbox", { name: "Quantity" })
      ).toBeInTheDocument();
    });

    describe("then fill in inputs", () => {
      const title = "Kindle";
      const price = "150";
      const quantity = "2";

      it("state reflects `onChange` for `title` input", () => {
        let titleInput = screen.getByRole("textbox", { name: "Product Name" });
        userEvent.type(titleInput, "Kindle")

        expect(titleInput).toHaveValue(title);
      });

      it("state reflects `onChange` for `price` input", () => {
        let priceInput = screen.getByRole("textbox", { name: "Price" });
        userEvent.type(priceInput, "150")

        expect(priceInput).toHaveValue(price);
      });

      it("state reflects `onChange` for `quantity` input", () => {
        let quantityInput = screen.getByRole("textbox", { name: "Quantity" });
        userEvent.type(quantityInput, "2")

        expect(quantityInput).toHaveValue(quantity);
      });

      describe("then submit form", () => {
        it("`onAddProduct` is called", () => {
          const button = screen.getByRole("link", {name: "Add"});
          userEvent.click(button)
          expect(func.mock.calls.length).toBe(1);
        });

        it("`onAddProduct` is passed new product", () => {
          const button = screen.getByRole("link", {name: "Add"});
          let titleInput = screen.getByRole("textbox", { name: "Product Name" });
          userEvent.type(titleInput, "Kindle");
          let priceInput = screen.getByRole("textbox", { name: "Price" });
          userEvent.type(priceInput, "150");
          let quantityInput = screen.getByRole("textbox", { name: "Quantity" });
          userEvent.type(quantityInput, "2");

          const newProduct = {
            title,
            price: +price,
            quantity: +quantity
          }
          userEvent.click(button)

          expect(func.mock.calls[0][0]).toEqual(newProduct);
        });
      });
    });
  });
});
