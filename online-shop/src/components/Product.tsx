import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PropTypes from "prop-types";

const Product = ({ product }: any) => {
  const { id, image, category, title, price } = product;

  const { addToCart }: any = useContext(CartContext);

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
          <h1 className="font-b font-semibold">{title}</h1>
          <p>{category}</p>
        </div>
      </div>

      <div className="py-2 flex justify-between items-end">
        <p className="font-semibold">$ {price}</p>
        <button
          onClick={() => addToCart(product, id)}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.string,
};

export default Product;
