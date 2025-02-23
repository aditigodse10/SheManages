import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDeleteSweep } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import { useAuth } from "../context/AuthProvider";
import { baseUrl } from "../urls";

const ProductList = ({ userId, del }) => {
  const checkdelete = del.del;
  const [authUser, setAuthUser] = useAuth();
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [isSorted, setIsSorted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    username: "",
    bio: "",
    email: "",
    phonenumber: "",
    linkedin: "",
    github: "",
    twitter: "",
    instagram: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/products/user/${userId}`
        );
        setProducts(response.data);
        toast.success("Products fetched successfully...");
      } catch (error) {
        toast.error("Error fetching products");
        console.error("Error fetching products:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/user/getClickedUserdata/${userId}`
        );
        setUserData(response.data);
        setEditFormData({
          username: response.data.username,
          bio: response.data.bio,
          email: response.data.email,
          phonenumber: response.data.phonenumber,
          linkedin: response.data.linkedin,
          github: response.data.github,
          twitter: response.data.twitter,
          instagram: response.data.instagram,
        });
        toast.success("User data fetched successfully...");
      } catch (error) {
        toast.error("Error fetching user data");
        console.error("Error fetching user data:", error);
      }
    };

    fetchProducts();
    fetchUserData();
  }, [userId]);

const handleDelete = async (productId) => {
  try {
    const { status } = await axios.delete(`${baseUrl}/products/delete/${productId}`);

    if (status === 200) {
      toast.success("Product deleted successfully...");
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
    } else {
      toast.error("Error deleting product");
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with an error:", error.response.status, error.response.data);
      if (error.response.status === 404) {
        toast.error("Product not found");
      } else if (error.response.status === 400) {
        toast.error("Invalid product ID");
      } else if (error.response.status === 403) {
        toast.error("Unauthorized action");
      } else {
        toast.error("Error deleting product");
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
      toast.error("Network error, please try again");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", error.message);
      toast.error("Error deleting product");
    }
  }
};


  const handleEditChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${baseUrl}/user/updateProfile/${userId}`,
        editFormData
      );
      if (res.status === 200) {
        toast.success("Profile updated successfully...");
        setUserData(res.data);
        setIsEditing(false);
      } else {
        toast.error("Error updating profile");
      }
    } catch (error) {
      toast.error("Error updating profile");
      console.error("Error updating profile:", error);
    }
  };

  const phoneNumber = userData.phonenumber
    ? String(userData.phonenumber)
    : "+919292992992";

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
    setIsSorted(true);
    toast.success("Products sorted by price");
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-gradient-to-r from-purple-50 to-pink-50 min-h-screen">
      <Toaster />
      <div className="bg-white shadow-xl rounded-lg p-6 md:flex md:items-center mb-12">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={editFormData.username}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Bio</label>
              <input
                type="text"
                name="bio"
                value={editFormData.bio}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={editFormData.email}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phonenumber"
                value={editFormData.phonenumber}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                value={editFormData.linkedin}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">GitHub</label>
              <input
                type="text"
                name="github"
                value={editFormData.github}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Twitter</label>
              <input
                type="text"
                name="twitter"
                value={editFormData.twitter}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Instagram</label>
              <input
                type="text"
                name="instagram"
                value={editFormData.instagram}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 ml-4"
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <div className="md:w-1/2 md:mr-8">
              <div className="relative h-72 mb-4 rounded-lg overflow-hidden shadow-lg">
                <div className="h-full w-full relative">
                  <img
                    src={
                      userData.profile || "https://via.placeholder.com/1200x400"
                    }
                    alt="cover"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ objectPosition: "center" }}
                  />
                  <img
                    src={userData.profile}
                    alt="profile"
                    className="w-36 h-36 rounded-full border-2 border-white absolute -bottom-14 transform -translate-y-1/2 -translate-x-1/2 left-1/2 shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h1 className="text-3xl font-semibold mb-2 text-gray-800 capitalize">
                {userData.username}
              </h1>
              <p className="text-gray-600 mb-4 capitalize">{userData.bio}</p>
              <p className="text-gray-600">
                <strong>Email:</strong> {userData.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {phoneNumber}
              </p>
              <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                <ReactWhatsapp
                  number={phoneNumber}
                  message="I am interested in your work..let's Connect"
                  className="flex items-center"
                >
                  <button className="flex items-center bg-green-500 text-white sm:px-4 sm:py-2 px-2 py-1 text-[11px] sm:text-sm rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105 ">
                    <FaWhatsappSquare className="w-6 h-6 mr-2" />
                    Connect on Whatsapp
                  </button>
                </ReactWhatsapp>
                <div className="flex items-end justify-evenly my-auto">
                  <a
                    href={userData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors w-8 h-8"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={userData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600 transition-colors w-8 h-8"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={userData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors w-8 h-8"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={userData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors w-8 h-8"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              {checkdelete === "true" && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition duration-300 mt-4 sm:text-base text-sm"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {products.length > 0 ? (
        <>
          <div className="w-full text-3xl mx-auto text-center">
            My Products
            <hr className="h-1 rounded-full mt-2 bg-gradient-to-r from-slate-400 to-slate-800" />
          </div>
          <div className="flex justify-between max-[391px]:flex-col  items-center mt-8 mb-4">
            <p className="text-gray-700">
              <span>
                Showing{" "}
                {(currentPage - 1) * itemsPerPage +
                  1 +
                  "-" +
                  Math.min(currentPage * itemsPerPage, products.length)}
              </span>{" "}
              out of {products.length} products
            </p>
            <div
              onClick={() => handleSort()}
              className="flex flex-row items-center border-2 border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition-colors m-1"
            >
              <span className="sm:mr-2">Sort by Price</span>
              <IoMdArrowDropdownCircle className="w-6 h-6" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <div className="flex w-full items-center justify-between p-2">
                  <h2 className="text-lg font-semibold mb-2 capitalize text-gray-800">
                    {item.name}
                  </h2>
                  <p className="mb-2 text-slate-800 font-semibold">
                    ₹{item.price}
                  </p>
                </div>
                {checkdelete === "true" && (
                  <MdDeleteSweep
                    onClick={() => handleDelete(item._id)}
                    className="hover:text-red-500 text-violet-600 hover:border-b-2 hover:border-red-700 rounded-full cursor-pointer hover:scale-110 duration-500 text-3xl transition-colors"
                  />
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center mt-8 mb-8">
          <img
            src="https://ouch-cdn2.icons8.com/IK2vpPsInJDG_Wr511yxDeQ7_r-e4CMxsjVVexHakv8/rs:fit:368:276/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTYy/L2M3MzgwMGFjLTVl/NzAtNDU3Yy04MjRl/LTdkMTNmNzQwMjY1/MS5zdmc.png"
            alt="No Products"
            className="mb-4"
          />
          <p className="text-gray-600 text-2xl font-bold">
            No products available.
          </p>
          <Link to="/addproduct">
            {" "}
            <button className="btn px-3 p-2 text-center py-auto duration-500 text-base bg-violet-500 hover:bg-white text-white hover:text-violet-500 hover:border-2 hover:border-violet-900 m-4">
              Add Product
            </button>
          </Link>
        </div>
      )}

      {products.length > 0 && (
        <div className="flex justify-center mt-8">
          <nav className="flex" aria-label="Pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              } px-3 py-1 rounded-l-lg bg-purple-600 text-white hover:bg-purple-700 transition duration-300`}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-purple-300 hover:text-white"
                } px-3 py-1`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } px-3 py-1 rounded-r-lg bg-purple-600 text-white hover:bg-purple-700 transition duration-300`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProductList;
