import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai"; // Import search icon
import axios from "axios";
import { baseUrl } from "../urls";


const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "clothes",
    "art & craft",
    "painting",
    "pottery",
    "statue",
    "utensils",
    "food",
    "toy",
    "basket",
    "wooden material",
    "other",
  ];

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/products/getProducts`
      );
      setAllProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts();
    setCurrentPage(1); // Reset to the first page when filters change
  }, [searchQuery, selectedCategories, priceRange, allProducts]);

  useEffect(() => {
    filterProducts();
  }, [currentPage]);

  const filterProducts = () => {
    let filtered = allProducts.filter((product) =>
      product.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const productsPerPage = 16;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/digital-art-international-women-s-day-celebration-women-s-rights_23-2151368508.jpg?size=626&ext=jpg')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        opacity: "1",
        height: "100%",
      }}
    >
      <div className="md:max-w-screen-xl sm:max-w-screen-lg max-w-screen-md items-center justify-center mx-auto sm:px-10 p-4 h-full md:pb-10 sm:pb-10 pb-12 min-h-full">
        <div className="flex justify-center items-center mb-4">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search by username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 transition duration-300 hover:border-purple-500"
            />
            <AiOutlineSearch className="absolute top-[14px] right-4 text-gray-400" />
          </div>
        </div>
        <div className="flex justify-between text-white items-center p-4">
          <span>
            Showing {(currentPage - 1) * productsPerPage + 1}-
            {Math.min(currentPage * productsPerPage, filteredProducts.length)}{" "}
            out of {filteredProducts.length} products
          </span>
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="rounded-full p-2 px-6 text-sm flex items-center justify-center bg-gradient-to-r from-purple-400 via-violet-500 to-violet-600 text-white shadow-lg hover:shadow-xl transition-transform duration-500 transform hover:scale-110 cursor-pointer"
          >
            Sort by{" "}
            <IoMdArrowDropdownCircle className="m-auto w-7 h-7 pl-1 text-center" />
          </div>
        </div>
        {showFilter && (
          <div className="relative mb-4">
            <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-xl z-10 p-4 transition-all duration-500 transform origin-top scale-95">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Category</h3>
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    <label className="text-sm">{category}</label>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Price Range</h3>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([+e.target.value, priceRange[1]])
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], +e.target.value])
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  setShowFilter(false);
                  setCurrentPage(1);
                  filterProducts();
                }}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition duration-300"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 cursor-pointer">
          {currentProducts.length > 0 ? (
            currentProducts.map((item, i) => (
              <Item
                key={i}
                username={item.username}
                userId={item.userId}
                profile={item.profile}
                _id={item._id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                category={item.category}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center">
              <img
                src="https://ouch-cdn2.icons8.com/lmIhjGb08SHwj2F42VBILBiofIxtSePyKKuteXtoUxA/rs:fit:368:276/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDQ5/L2FhOGJjN2ZkLTY3/ZmEtNGM4OC1iYWFm/LTRjNDgwZGJmNjQ3/Yy5zdmc.png"
                alt="No Data"
                className="mb-4"
              />
              <p className="text-2xl font-bold ">No products found</p>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1 || filteredProducts.length === 0}
            className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition duration-300"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-2 p-2 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } transition duration-300`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={
              currentPage === totalPages || filteredProducts.length === 0
            }
            className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
