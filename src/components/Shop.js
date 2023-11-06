import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { IoMdTrash } from "react-icons/io";

const Shop = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flec-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ 1000
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <IoMdTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
