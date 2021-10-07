import React, { useState } from "react";
import { BaseProduct, Product } from "../types/types";
import ProductForm from "./ProductForm";

type Props = {
  product: Product,
  onToggleEdit: () => void,
  onUpdateProduct: (value: BaseProduct, id: string) => void,
  editable:boolean
}

const EditProductForm = (props: Props) => {
  const [title, setTitle] = useState<string>(props.product.title || "");
  const [price, setPrice] = useState<number>(props.product.price || 0);
  const [quantity, setQuantity] = useState<number>(props.product.quantity || 0);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let editedProduct = {
      title,
      price,
      quantity,
    };
    props.onUpdateProduct(editedProduct, props.product._id);
    props.onToggleEdit();
  };

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

  const handleCancelClick = () => {
    setTitle(props.product.title);
    setPrice(props.product.price);
    setQuantity(props.product.quantity);
    props.onToggleEdit();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <ProductForm
        title={title}
        price={price}
        quantity={quantity}
        onInputChange={handleInputChange}
        setQuantity={setQuantity}
        onSubmit={handleSubmit}
        submitText="Update"
        onCancelClick={handleCancelClick}
      />
    </div>
  );
};

export default EditProductForm;
