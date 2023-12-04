import { useEffect, useState } from "react";
import Product from "./Product";
import Select from "react-select";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [selectCategory, setSelectCategory] = useState<any>(null);

  useEffect(() => {
    const getProducts = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    };
    getProducts();
  }, []);

  const productHandeler = () => {
    const searchProducts = search
      ? data.filter((item: string) =>
          item["title" as any].toLowerCase().includes(search.toLowerCase())
        )
      : data;

    const filterProducts = selectCategory
      ? data.filter((value) => value["category"] === selectCategory["value"])
      : data;

    return searchProducts.filter((value) => filterProducts.includes(value));
  };

  const searchHandler = ({ e }: any) => {
    setSearch(e.target.value);
  };

  const categories = Array.from(new Set(data.map((res) => res["category"])));

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  return (
    <>
      <div className="flex p-3">
        <input
          type="text"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-[40px] px-5 mx-5 border border-gray-400 rounded shadow"
          placeholder="Search Product"
          value={search}
          onChange={searchHandler}
        />
        <Select
          className="text-gray-800 font-semibold px-5"
          options={categoryOptions}
          isClearable
          placeholder="Select a category"
          onChange={(selectOption) => setSelectCategory(selectOption)}
          value={selectCategory}
        />
      </div>
      <div className="container mx-auto py-3">
        <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {[productHandeler].map(({ item }: any) => {
            if (item !== undefined) {
              return <Product product={item} key={item.id} />;
            } else {
              return <div/>;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
