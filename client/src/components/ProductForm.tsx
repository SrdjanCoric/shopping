import React, {SetStateAction, MouseEvent} from "react";

type Props = {
  title:string,
  price:number
  quantity:number
  onInputChange:(value: React.SyntheticEvent) => void,
  setQuantity?: React.Dispatch<SetStateAction<number>>
  onSubmit: (value: MouseEvent<HTMLAnchorElement>) => void,
  submitText: string,
  onCancelClick?: (value: MouseEvent<HTMLAnchorElement>) => void
}

const ProductForm = (props: Props) => {
  return (
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          name="title"
          value={props.title}
          onChange={props.onInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="text"
          id="product-price"
          name="price"
          value={props.price}
          onChange={props.onInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="text"
          id="product-quantity"
          name="quantity"
          value={props.quantity}
          onChange={props.onInputChange}
        />
      </div>

      <div className="actions form-actions">
        <a href="#/"className="button" data-testid="submit" onClick={props.onSubmit}>
          {props.submitText}
        </a>
        {props.submitText !== "Add" ? (
          <a className="button" onClick={props.onCancelClick}>
            Cancel
          </a>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default ProductForm;
