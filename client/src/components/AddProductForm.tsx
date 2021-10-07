import React, { useState } from "react";
import { BaseProduct } from "../types/types";
import ProductForm from "./ProductForm";

type Props = {
  onAddProduct: (value: BaseProduct, callback: () => void)=> void
}

const AddProductForm = ({onAddProduct}: Props) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [visible, setVisible] = useState(false);

  const handleToggleAddForm = () => {
    setVisible(!visible);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let product = {
      title,
      price,
      quantity,
    };

    onAddProduct(product, handleProductAdded);

  };

  const handleProductAdded = () => {
    handleToggleAddForm();
    resetState();
  }

  const handleInputChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "price":
        setPrice(+value);
        break;
      case "quantity":
        setQuantity(+value);
        break;
    }
  };

  const resetState = () => {
    setTitle("");
    setPrice(0);
    setQuantity(0);
    setVisible(false);
  };

  const addFormClass = visible ? "add-form visible" : "add-form";

  return (
    <div className={addFormClass}>
      <p>
        <a className="button add-product-button" onClick={handleToggleAddForm}>
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <ProductForm
        title={title}
        price={price}
        quantity={quantity}
        submitText="Add"
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default AddProductForm;
