import { BaseProduct, Product, Cart } from "../types/types";
import EditableProduct from "./EditableProduct";

type Props = {
  products: Product[],
  onAddToCart:(value: string) => void,
  onDeleteProduct: (value: string) => void,
  onUpdateProduct: (value: BaseProduct, id:string, callback?: (value: Cart) => void) => void
}

const ProductListing = (props: Props) => {
  const products = props.products.map((product) => (
    <EditableProduct
      key={product._id}
      product={product}
      onAddToCart={props.onAddToCart}
      onDeleteProduct={props.onDeleteProduct}
      onUpdateProduct={props.onUpdateProduct}
    />
  ));
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products}
    </div>
  );
};

export default ProductListing;
