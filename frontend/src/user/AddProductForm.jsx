import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../urls";

const AddProductForm = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  const userId = authUser._id;
  const username = authUser.username;
  const profile = authUser.profile;

  const [name, setName] = useState("");
  const [category, setCategory] = useState("clothes");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseUrl}/products/add`,
        {
          userId,
          name,
          username,
          profile,
          category,
          price,
          imageUrl,
        }
      );
      toast.success(response.data.message);
      setName("");
      setCategory("clothes");
      setPrice("");
      setImageUrl("");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add product");
    }
  };
  //https://img.freepik.com/premium-photo/diversity-multiethnic-women-women-different-culture-different-countries_834602-59483.jpg?size=626&ext=jpg

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/diversity-multiethnic-women-women-different-culture-different-countries_834602-59483.jpg?size=626&ext=jpg')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        opacity: "1",
        height: "100%",
      }}
    >
      <div className="max-w-lg mx-auto p-8 pt-16 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-50 font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-50 font-medium mb-2">
              Category
            </label>
            <select
              className="w-full px-3 p-1 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="clothes" className="p-1">
                Clothes
              </option>
              <option value="art & craft" className="p-1">
                Art & Craft
              </option>
              <option value="painting" className="p-1">
                Painting
              </option>
              <option value="pottery" className="p-1">
                Pottery
              </option>
              <option value="statue" className="p-1">
                Statue
              </option>
              <option value="utensils">Utensils</option>
              <option value="food" className="p-1">
                Food
              </option>
              <option value="toy" className="p-1">
                Toy
              </option>
              <option value="basket" className="p-1">
                Basket
              </option>
              <option value="wooden material" className="p-1">
                Wooden Material
              </option>
              <option value="other" className="p-1">
                Other
              </option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-50 font-medium mb-2">Price</label>
            <input
              type="number"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-50 font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
