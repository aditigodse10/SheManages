// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Logout from "../pages/Logout";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [active, setActive] = useState("Home");

  return (
    <nav
      className="bg-white border-b border-gray-200 container sm:max-w-screen-2xl mx-auto px-8  mb-
    20"
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          className="text-2xl font-bold text-pink-600 hover:text-pink-500 hover:border-2 hover:border-pink-400 duration-300 p-1 mr-2 ml-0 m-1 rounded-3xl"
          to="/"
          onClick={() => setActive("Home")}
        >
          SheManages
        </Link>
        <button
          className="text-pink-500 md:hidden focus:outline-none focus:ring-2 rounded-md focus:ring-pink-500 border-none hover:scale-125 duration-500"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className="hidden md:flex space-x-4 md:justify-center items-center"
          id="navbarNav"
        >
          <Link
            className="text-gray-800 hover:text-gray-600 px-3 py-2 hover:bg-pink-100 rounded-md"
            to="/"
            onClick={() => setActive("Home")}
          >
            Home
            {active === "Home" ? (
              <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
            ) : (
              ""
            )}
          </Link>

          <Link
            className="text-gray-800 hover:text-gray-600 rounded-lg px-3 py-2 hover:bg-pink-100"
            to="/resources"
            onClick={() => setActive("Resources")}
          >
            Resources
            {active === "Resources" ? (
              <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
            ) : (
              ""
            )}
          </Link>
          <Link
            className="text-gray-800 hover:text-gray-600 rounded-md hover:bg-pink-100 px-3 py-2"
            to="/products"
            onClick={() => setActive("Products")}
          >
            Products
            {active === "Products" ? (
              <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
            ) : (
              ""
            )}
          </Link>
          <Link
            className="block text-gray-800 hover:bg-pink-100 rounded-md px-3 py-2"
            to="/ideas"
            onClick={() => setActive("Ideas")}
          >
            Ideas
            {active === "Ideas" ? (
              <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
            ) : (
              ""
            )}
          </Link>

          {authUser ? (
            <Link
              className="block text-gray-800 hover:bg-pink-100 rounded-md px-3 py-2"
              to="/addproduct"
              onClick={() => setActive("Add Item")}
            >
              Add Item
              {active === "Add Item" ? (
                <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
              ) : (
                ""
              )}
            </Link>
          ) : (
            ""
          )}

          {authUser ? (
            <Link
              className="block text-gray-800 hover:bg-pink-100 rounded-md px-3 py-2"
              to={`products/myproduct/${authUser._id}`}
              onClick={() => setActive("My Profile")}
            >
              My Profile
              {active === "My Profile" ? (
                <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
              ) : (
                ""
              )}
            </Link>
          ) : (
            ""
          )}

          {authUser ? (
            <Logout />
          ) : (
            <Link to="/login">
              <button className="bg-pink-500 w-full text-white px-4 py-2 rounded-md hover:bg-pink-600">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            className="block text-gray-800 rounded-md px-3 py-2"
            to="/"
            onClick={() => setActive("Home")}
          >
            Home
            {active === "Home" ? (
              <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
            ) : (
              ""
            )}
          </Link>
          <Link
            className="block text-gray-800 rounded-md px-3 py-2"
            to="/resources"
            onClick={() => setActive("Resources")}
          >
            Resources
            {active === "Resources" ? (
              <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
            ) : (
              ""
            )}
          </Link>
          <Link
            className="block text-gray-800  rounded-md px-3 py-2"
            to="/products"
            onClick={() => setActive("Products")}
          >
            Products
            {active === "Products" ? (
              <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
            ) : (
              ""
            )}
          </Link>
          <Link
            className="block text-gray-800  rounded-md px-3 py-2"
            to="/ideas"
            onClick={() => setActive("Ideas")}
          >
            Ideas
            {active === "Ideas" ? (
              <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
            ) : (
              ""
            )}
          </Link>

          {authUser ? (
            <Link
              className="block text-gray-800  rounded-md px-3 py-2"
              to="/addproduct"
              onClick={() => setActive("Add Item")}
            >
              Add Item
              {active === "Add Item" ? (
                <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
              ) : (
                ""
              )}
            </Link>
          ) : (
            ""
          )}

          {authUser ? (
            <Link
              className="block text-gray-800  rounded-md px-3 py-2"
              to={`products/myproduct/${authUser._id}`}
              onClick={() => setActive("My Profile")}
            >
              My Profile
              {active === "My Profile" ? (
                <hr className=" h-1 text-red-500 bg-red-500 rounded-full"></hr>
              ) : (
                ""
              )}
            </Link>
          ) : (
            ""
          )}

          {authUser ? (
            <Logout />
          ) : (
            <Link to="/login">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
