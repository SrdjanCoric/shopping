
import ShoppingCart from "./ShoppingCart";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";


const Shop = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [cart, setCart] = useState<Cart[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/products")
  //     .then((response) => response.data)
  //     .then((products) => {
  //       setProducts(products);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const indexOfProductInCart = (id: string) => {
  //   return cart.findIndex((product) => product._id === id);
  // };

  // const incrementCartItemQuantity = (productId: string) => {
  //   let updatedCart = cart.map((item) => {
  //     if (item._id === productId) {
  //       return Object.assign({}, item, { quantity: item.quantity + 1 });
  //     } else {
  //       return item;
  //     }
  //   });
  //   setCart(updatedCart);
  // };

  // const handleCart = (cartItem: Cart) => {
  //   let idxInCart = indexOfProductInCart(cartItem._id);
  //   if (idxInCart === -1) {
  //     setCart(cart.concat(Object.assign({}, cartItem, { quantity: 1 })));
  //   } else {
  //     incrementCartItemQuantity(cartItem._id);
  //   }
  // };

  // const handleAddToCart = (productId: string) => {
  //   let product = products.find((product) => product._id === productId);
  //   if (product) {
  //     if (product.quantity === 0) {
  //       return;
  //     }
  //     handleUpdateProduct(
  //       { ...product, quantity: product.quantity - 1 },
  //       productId,
  //       handleCart
  //     );
  //   }
  // };

  // const updateCartItem = (updatedProduct: Product) => {
  //   const cartItemIdx = cart.findIndex(
  //     (item) => item._id === updatedProduct._id
  //   );
  //   if (cartItemIdx === -1) return;
  //   setCart(
  //     cart.map((item) => {
  //       if (item._id === updatedProduct._id) {
  //         return Object.assign({}, item, {
  //           title: updatedProduct.title,
  //           price: updatedProduct.price,
  //         });
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // };

  // const handleCheckout = () => {
  //   setCart([]);
  // };

  // const handleDeleteProduct = (productId: string) => {
  //   axios
  //     .delete(`/api/products/${productId}`)
  //     .then((response) => response.data)
  //     .then(() => {
  //       setProducts(products.filter((p) => p._id !== productId));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleAddProduct = (product: BaseProduct, callback?: () => void) => {
  //   axios
  //     .post("/api/products", { ...product })
  //     .then((response) => response.data)
  //     .then((newProduct) => {
  //       setProducts(products.concat(newProduct));
  //       if (callback) {
  //         callback()
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleUpdateProduct = (product: BaseProduct, id: string, callback?: (value: Cart) => void) => {
  //   axios
  //     .put(`/api/products/${id}`, { ...product })
  //     .then((response) => response.data)
  //     .then((newProduct) => {
  //       const newProducts = products.map((p) => {
  //         if (p._id === id) {
  //           return Object.assign({}, newProduct);
  //         } else {
  //           return p;
  //         }
  //       });
  //       setProducts(newProducts);
  //       if (callback) {
  //         callback(newProduct);
  //       } else {
  //         updateCartItem(newProduct);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div id="app">
      <ShoppingCart/>

      <main>
        <ProductListing
        />
        <AddProductForm />
      </main>
    </div>
  );
};

export default Shop;
