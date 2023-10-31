import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <div className="border border-[#e4e4e4] h-[400px] p-5">
      <div className="h-[300px]">
        <div className="my-4 relative overflow-hidden group transition">
          <div className="w-full h-full flex items-center">
            <div className="w-[250px] mx-auto flex justify-center items-center">
              <img className="max-h-[160px]" src={image} alt="" />
            </div>
          </div>
        </div>
        <div>
          <Link to={`/product/${id}`}>
            <h1 className="font-bold font-semibold">{title}</h1>
          </Link>
          <p>{category}</p>
        </div>
      </div>

      <div className="py-2 flex justify-between items-end">
        <p className="font-semibold">$ {price}</p>
        <button
          onClick={() => addToCart(product, id)}
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
