import React, { useState, useEffect} from "react";
import { BiLoader } from "react-icons/bi";
import Product from "../components/Product";

function Filter() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div>
          <BiLoader className="text-center w-full" size={40} />
        </div>
      </>
    );
  };

  const filterProduct = (item) => {
    const updatedList = data.filter((x) => x.category === item);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="py-4">
          <button
            onClick={() => setFilter(data)}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-1 my-1 border border-gray-400 rounded shadow"
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-1 mx-1 border border-gray-400 rounded shadow"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-1 mx-1 border border-gray-400 rounded shadow"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-1 mx-1 border border-gray-400 rounded shadow"
          >
            Jewelery
          </button>{" "}
          <button
            onClick={() => filterProduct("electronics")}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-1 mx-1 border border-gray-400 rounded shadow"
          >
            Electronic
          </button>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filter.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="text-center py-5">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Filter;
