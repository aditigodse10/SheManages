// import React from "react";
// import { GoStarFill } from "react-icons/go";
// import ReactWhatsapp from "react-whatsapp";
// import { FaWhatsappSquare } from "react-icons/fa";

// const ProductDisplay = (props) => {
//   const { product } = props;
//   return (
//     <div className="flex sm:flex-row flex-col justify-center items-center max-w-screen-xl mx-auto container px-6 p-4 h-full ">
//       {/* <h1 className="uppercase text-3xl">Your Product</h1> */}
//       <hr />
//       <div className="flex flex-row items-center justify-start w-[60%] p-4 rounded-tl-2xl rounded-br-2xl">
//         {/* <div className="flex flex-col  w-[23%]  p-1">
//           <img className="p-1" src={product.image} />
//           <img className="p-1" src={product.image} />
//           <img className="p-1" src={product.image} />
//           <img className="p-1" src={product.image} />
//         </div> */}
//         <div className="min-h-full  min-w-fit w-full h-[70vh] ">
//           <img
//             className="min-h-full max-h-[70vh] rounded-tl-3xl rounded-br-3xl"
//             src={product.imageUrl}
//           />
//         </div>
//       </div>
//       <div>
//         <div className="text-3xl font-bold m-auto p-2">{product.name}</div>
//         <div className="flex items-center text-red-600 p-2">
//           <GoStarFill />
//           <GoStarFill />
//           <GoStarFill />
//           <GoStarFill />
//           <GoStarFill />
//           <span className="text-black pl-2">(332)</span>
//         </div>
//         <div className="flex p-2">
//           <div className="line-through font-semibold p-2">
//             ${product.price}{" "}
//           </div>
//         </div>
//         <div className="">
//           <button className="max-w-fit p-2 m-4 text-xs rounded-tl-xl rounded-br-xl bg-red-600 text-white">
//             Connect With Me On Whatsapp
//           </button>
//           <ReactWhatsapp
//             number="+91 9752468959"
//             message="I am interested in your work..let's Connect"
//           >
//             {" "}
//             <FaWhatsappSquare className="bg-white text-4xl text-center hover:text-green-600 text-green-500" />
//           </ReactWhatsapp>
//         </div>

//         <div className="p-4 font-semibold">
//           Category:
//           <span className="font-normal pl-1 capitalize">
//             {product.category}, pot, cloths
//           </span>
//         </div>
//         <div className="p-4 font-semibold">
//           Tags: <span className="font-normal">Modern, Latest</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;
