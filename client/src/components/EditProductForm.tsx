import React, { useState, useContext } from "react";
import { ProductDispatchContext } from "../context/product-context";
import apiClient from "../lib/ApiClient";
import {Product } from "../types/types";
import ProductForm from "./ProductForm";

type Props = {
  product: Product,
  onToggleEdit: () => void,
}

const EditProductForm = ({product, onToggleEdit}: Props) => {
  const [title, setTitle] = useState<string>(product.title || "");
  const [price, setPrice] = useState<number>(product.price || 0);
  const [quantity, setQuantity] = useState<number>(product.quantity || 0);

  const {updateProduct} = useContext(ProductDispatchContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let editedProduct = {
      title,
      price,
      quantity,
    };
    apiClient.updateProduct(product._id, editedProduct, updatedProduct => {
      updateProduct(updatedProduct)
      onToggleEdit()
    })
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
    setTitle(product.title);
    setPrice(product.price);
    setQuantity(product.quantity);
    onToggleEdit();
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
