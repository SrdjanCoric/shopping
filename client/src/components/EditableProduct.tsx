import { useState } from "react";
import { BaseProduct, Cart, Product } from "../types/types";
import EditProductForm from "./EditProductForm";

type Props = {
  product: Product,
  onAddToCart: (value: string) => void,
  onDeleteProduct: (value: string) => void,
  onUpdateProduct: (value: BaseProduct, id:string, callback?: (value: Cart) => void) => void
}

const EditableProduct = (props: Props) => {
  const [editable, setEditable] = useState(false);
  const { product, onUpdateProduct, onAddToCart, onDeleteProduct } = props;
  const isZeroQuantity = product.quantity === 0;

  const handleToggleEdit = () => {
    setEditable(!editable);
  };
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
            onUpdateProduct={onUpdateProduct}
            editable={editable}
          />
        ) : (
          <div className="actions product-actions">
            <a
              className={
                isZeroQuantity
                  ? "button add-to-cart disabled"
                  : "button add-to-cart"
              }
              onClick={() => onAddToCart(product._id)}
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
          onClick={() => onDeleteProduct(product._id)}
        >
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default EditableProduct;
