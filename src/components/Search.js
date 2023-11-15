import React, { useEffect, useMemo, useState } from "react";
import Product from "./Product";
import Filter from "./Filter";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    };
    getProducts();
  }, []);

  const searchProducts = useMemo(() => {
    if (!data) return [];
    if (!search) return data;

    return data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex text-center p-3">
        <div>
          <input
            type="text"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-[50px] px-5 mx-10 border border-gray-400 rounded shadow"
            placeholder="Search Product"
            value={search}
            onChange={searchHandler}
          />
        </div>
        <div>
          <Filter />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {searchProducts.map((item) => {
            return <Product product={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
