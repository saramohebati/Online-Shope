import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { IoMdTrash } from "react-icons/io";
import { Link } from "react-router-dom";

const Shop = () => {
  const { cart, clearCart, total, itemAmount }: any = useContext(CartContext);

  return (
    <div className="pt-10">
      <div className="flex items-center justify-between p-6 pt-10 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-full lg:h-[600px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map(({ item }: any) => {
          if (item !== undefined) {
            return <CartItem item={item} key={item["id"]} />;
          } else {
            return <div />;
          }
        })}
      </div>

      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl"
          >
            <IoMdTrash />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 text-primary flex p-4 justify-center items-center w-full font-medium"
        >
          View cart
        </Link>
        <Link
          to="/"
          className="bg-gray-400 text-white flex p-4 justify-center items-center w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Shop;
