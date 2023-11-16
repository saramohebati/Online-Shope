import React, { useState, useEffect, useMemo } from "react";
import Product from "./Product";

function Filter() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
      }
    };
    getProducts();
  }, []);

  function getFilteredList() {
    if (!filter) {
      return data;
    }
    return data.filter((item) => item.category === filter);
  }

  var filteredList = useMemo(getFilteredList, [filter, data]);

  function handleCategoryChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div>
      <div>
        <select
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 h-[50px] px-3 rounded shadow"
          value={filter}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="men's">Men&apos;s Clothing</option>
          <option value="women's">Women&apos;s Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronic">Electronic</option>
        </select>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {filteredList.map((element, index) => (
            <Product {...element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
