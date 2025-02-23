import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = (props) => {
  const { product } = props;
  console.log(" be ", product);
  return (
    <div className="uppercase flex justify-start items-center h-10 max-w-screen-xl mx-auto container sm:px-14 p-4 text-xs font-semibold">
      home <IoIosArrowForward className="font-bold text-black ml-1 mr-1" /> shop{" "}
      <IoIosArrowForward className="font-bold text-black ml-1 mr-1" />
      {product.category}{" "}
      <IoIosArrowForward className="font-bold text-black ml-1 mr-1" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
