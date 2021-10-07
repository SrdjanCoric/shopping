import { useContext, useState } from "react";
import { CartDispatchContext } from "../context/cart-context";
import { ProductDispatchContext } from "../context/product-context";
import apiClient from "../lib/ApiClient";
import { Product } from "../types/types";
import EditProductForm from "./EditProductForm";

type Props = {
  product: Product,
}

const EditableProduct = (props: Props) => {
  const [editable, setEditable] = useState<boolean>(false);
  const { product} = props;
  const {addProductToCart, deleteProduct} = useContext(ProductDispatchContext)
  const {addItemToCart} = useContext(CartDispatchContext)
  const isZeroQuantity = product.quantity === 0;

  const handleToggleEdit = () => {
    setEditable(!editable);
  };

  const handleAddToCart = () => {
    if (product.quantity === 0) {
      return;
    }
    apiClient.addToCart(product._id, {...product, quantity: product.quantity - 1}, cartItem => {
      addProductToCart(product._id);
      addItemToCart(cartItem)
    })
  }

  const handleDeletePRoduct = () => {
    apiClient.deleteProduct(product._id, () => {
      deleteProduct(product._id);
    })
  }
  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className={isZeroQuantity ? "quantity none-left" : "quantity"}>
          {product.quantity} left in stock
        </p>
        {editable ? (
          <EditProductForm
            product={product}
            onToggleEdit={handleToggleEdit}
          />
        ) : (
          <div className="actions product-actions">
            <a
              className={
                isZeroQuantity
                  ? "button add-to-cart disabled"
                  : "button add-to-cart"
              }
              onClick={handleAddToCart}
            >
              Add to Cart
            </a>
            <a className="button edit" onClick={handleToggleEdit}>
              Edit
            </a>
          </div>
        )}

        <a
          className="delete-button"
          onClick={handleDeletePRoduct}
        >
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default EditableProduct;
