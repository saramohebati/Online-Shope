import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from '../components/CartItem'

const Shop = () => {
  const {cart} = useContext(CartContext);

  return (
    <div>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
      </div>
      <div>{cart.map((item) => {
        return <CartItem item={item} key={item.id} />
      })}</div>
    </div>
  );
};

export default Shop;
