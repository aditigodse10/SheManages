// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Breadcrum from "../components/Breadcrum";
// import ProductDisplay from "../components/ProductDisplay";
// import axios from "axios";

// const Product = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const { productId } = useParams();

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(
//         "https://womenempower-1.onrender.com/products/getProducts"
//       );
//       setAllProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const product = allProducts.find((product) => product._id === productId);

//   return (
//     <div className="w-full h-full">
//       <Breadcrum product={product} />
//       <ProductDisplay product={product} />
//     </div>
//   );
// };

// export default Product;
