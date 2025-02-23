import React from "react";
import { Link } from "react-router-dom";
import { GrResources } from "react-icons/gr";
import { FcIdea } from "react-icons/fc";
import { FaOpencart } from "react-icons/fa6";

const DescriptionSection = () => {
  return (
    <section
      id="description-section"
      className="py-12"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1029301918/photo/women-painting-mud-pot.jpg?s=612x612&w=0&k=20&c=kr1O0WfxfTgkNZou-RwgGgur70aqpqxQk3zZO00aDFo=')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        opacity: "1",
        height: "100%",
      }}
    >
      <div id="go-here" className="container mx-auto px-4 ">
        <h1 className="text-4xl font-bold mb-6  text-center">
          One platform for all your goals.
        </h1>
        <p className="text-lg mb-8 text-gray-100 font-normal text-center">
          This platform is designed to connect women all over the world where
          they can get all information related to tech and can share their
          ideas. They can get resources as per their need and can connect with
          other women to work upon their ideas. It can also be used by women to
          sell their homemade products which will help them in their economic
          growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-14 gap-10 max-w-screen-xl container mx-auto h-1/2">
          <div className="card bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <div className="card-body text-center">
              <p className="text-pink-500 mb-4">
                <i className="fas fa-calendar-check fa-2x"></i>
              </p>
              <GrResources className="w-full text-center text-7xl" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">
                Resources
              </h5>
              <p className="card-text mb-4 text-gray-600">
                Access a wealth of resources tailored for women in entrepreneurship,
                including tutorials, webinars, and articles to enhance your
                skills and knowledge.
              </p>
              <Link to="/resources">
                <button className="btn bg-pink-500 text-white px-6 py-1 rounded-lg hover:bg-pink-700 transition duration-200 text-base">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          <div className="card bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <div className="card-body text-center">
              <p className="text-pink-500 mb-4">
                <i className="fas fa-shopping-cart fa-2x"></i>
              </p>
              <FaOpencart className="w-full text-center text-7xl" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">Products</h5>
              <p className="card-text mb-4 text-gray-600">
                Discover and purchase unique, handmade products created by women
                around the world, supporting their economic growth and
                entrepreneurship.
              </p>
              <Link to="/products">
                <button className="btn bg-pink-500 text-white px-6 py-1 rounded-lg hover:bg-pink-700 transition duration-200 text-base">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          <div className="card bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <div className="card-body text-center">
              <p className="text-pink-500 mb-4">
                <i className="fas fa-search fa-2x"></i>
              </p>
              <FcIdea className="w-full text-center text-7xl" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">Ideas</h5>
              <p className="card-text mb-4 text-gray-600">
                Share and collaborate on innovative ideas with a community of
                like-minded women, driving forward technological advancements
                and creative solutions.
              </p>
              <Link to="/ideas">
                <button className="btn bg-pink-500 text-white px-6 py-1 rounded-lg hover:bg-pink-700 transition duration-200 text-base">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
