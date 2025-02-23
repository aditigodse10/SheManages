import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const imgProfile =
    props.profile ||
    "https://png.pngtree.com/png-clipart/20230707/ourmid/pngtree-business-woman-png-image_7505169.png";

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden p-1 transition-transform duration-300 transform hover:scale-105">
      <Link to={`/products/${props.userId}`} className="block">
        <img
          className="w-full h-52 object-cover transition-transform duration-300 transform hover:scale-110"
          src={props.imageUrl}
          alt="Product"
        />
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
          <div className="p-1">
            <img
              src={imgProfile}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 shadow-md"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="bg-white rounded-md shadow-md font-mono text-sm font-semibold px-1 p-2 capitalize">
              {props.username}
            </h2>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 bg-white px-4 py-2 rounded-md shadow-md">
          <p className="text-sm capitalize">{props.name}</p>
          <p className="text-xs font-semibold">₹{props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
