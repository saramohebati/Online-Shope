// import React, { useState, useEffect } from "react";
// import Product from "./Product";
// import Select from "react-select";

// function Filter() {
//   const [product, setProduct] = useState([]);
//   const [selectCategory, setSelectCategory] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => setProduct(data));
//   }, []);

//   const categories = Array.from(new Set(product.map((res) => res.category)));

//   const categoryOptions = categories.map((category) => ({
//     value: category,
//     label: category,
//   }));

//   const filterProducts = selectCategory
//     ? product.filter((product) => product.category === selectCategory.value)
//     : product;

//   return (
//     <>
//       <div className="flex p-3">
//           <Select
//             className="hover:bg-gray-100 text-gray-800 font-semibold px-5"
//             options={categoryOptions}
//             isClearable
//             placeholder="Select a category"
//             onChange={(selectOption) => setSelectCategory(selectOption)}
//             value={selectCategory}
//           />
//         </div>
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
//             {filterProducts.map((item) => {
//               return <Product product={item} key={item.id} />;
//             })}
//           </div>
//         </div>
//     </>
//   );
// }

// export default Filter;
