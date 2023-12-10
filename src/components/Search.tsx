import { useEffect, useState } from "react";
import Product from "./Product";
import Select from "react-select";

const Search = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);

  const [search, setSearch] = useState("");
  const [selectCategory, setSelectCategory] = useState<any>(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (): Promise<any> => {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setShowData(data);
      })
      .catch((error) => console.log(error));
  };

  const searchHandler = (search: any) => {
    setSearch(search);
    if (!search || search === "") {
      setShowData(data);
    } else {
      const searchProducts = search
        ? data.filter((item: string) =>
            item["title" as any].toLowerCase().includes(search.toLowerCase())
          )
        : data;

      const filterProducts = selectCategory
        ? data.filter((value) => value["category"] === selectCategory["value"])
        : data;

      setShowData(
        searchProducts.filter((value) => filterProducts.includes(value))
      );
    }
  };

  const categoryHandler = (category: any) => {
    setSelectCategory(category);
    const searchProducts = search
      ? data.filter((item: string) =>
          item["title" as any].toLowerCase().includes(search.toLowerCase())
        )
      : data;

    const filterProducts = category
      ? data.filter((value) => value["category"] === category["value"])
      : data;

    setShowData(
      searchProducts.filter((value) => filterProducts.includes(value))
    );
  };

  const categories = Array.from(new Set(data.map((res) => res["category"])));

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex p-3">
        <input
          type="text"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-[40px] px-5 mx-5 border border-gray-400 rounded shadow"
          placeholder="Search Product"
          value={search}
          onChange={(e) => searchHandler(e.target.value)}
        />
        <Select
          className="text-gray-800 font-semibold px-5"
          options={categoryOptions}
          isClearable
          placeholder="Select a category"
          onChange={(selectOption) => categoryHandler(selectOption)}
          value={selectCategory}
        />
      </div>
      <div className="container mx-auto py-3">
        <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {showData.map((item) => {
            return <Product product={item} key={item["id"]} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
