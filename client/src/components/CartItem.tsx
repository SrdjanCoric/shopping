type Props = {
  title: string,
  price: number,
  quantity: number
}

const CartItem = (props: Props) => {
  return (
    <tr data-testid="cartItem">
      <td>{props.title}</td>
      <td>{props.quantity}</td>
      <td>${props.price}</td>
    </tr>
  );
};

export default CartItem;
