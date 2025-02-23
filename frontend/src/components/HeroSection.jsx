import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../images/Hero Image.gif";
import HeroWave from "../images/wave (10).svg";
import { useAuth } from "../context/AuthProvider";


const HeroSection = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <section id="" className="max-w-screen h-full bg-gray-50">
        {/* Hero Section */}
        <div className=" mx-auto ">
          <div className="flex sm:flex-row flex-col items-center justify-center py-12 p-2  w-full max-h-fit bg-gray-50">
            <div className="hero-intro sm:w-1/2 w-full sm:h-full sm:p-6 h-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4 ">
                Empowering women across communities to get started
                <span className="text-pink-600">.</span>
              </h1>
              <p className="text-lg text-slate-800 mb-6">
                We see you, we hear you, and we empower you!
              </p>
              <a href="/">
                <button className="sm:h-14 h-12 min-h-8 btn-lg bg-pink-600 text-white px-6 sm:text-base text-sm rounded-lg hover:bg-pink-700 transition duration-200">
                  Learn More
                </button>
              </a>
            </div>
            <div className="  sm:w-1/2 sm:h-[300px] h-0 w-0 z-10 flex items-center  justify-center">
              <img
                className=" w-[100%] max-w-fit h-[400px] my-auto shadow-xl  transition-shadow shadow-pink-300 rounded-3xl"
                src={HeroImage}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        <img className=" w-full" src={HeroWave} alt="SheManages-hero-wave" />
      </section>
      {/* https://fortune.com/img-assets/wp-content/uploads/2021/09/GettyImages-591168857-e1631729825492.jpg?w=1440&q=75*/}
      {/* Additional Sections */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-12 ">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12">
          <div className="image-section ">
            <img
              className="max-w-full rounded-lg shadow-xl shadow-slate-400"
              src="https://media.gettyimages.com/id/494055741/photo/rural-girl-holding-laptop-with-seniors.jpg?s=612x612&w=0&k=20&c=GP7FZVCJ0-E3Or2pmvIa0_pvwgLKIOvgB6rgomP3E8U="
              alt="Women in Entrepreneurship"
            />
          </div>
          <div className="text-section">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 ">
              Bridging the Gender Gap in Technology
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We strive to create a community where women can thrive in entrepreneurship
              offering mentorship, resources, and a supportive network
              to help them achieve their goals.
            </p>
            <a href="#learn-more-1">
              <button className="btn bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12">
          <div className="image-section order-first md:order-last w-full">
            <img
              className="max-w-full w-full  rounded-lg shadow-xl shadow-slate-500"
              src="https://media.istockphoto.com/id/1181943751/photo/hdr-image-for-made-mat-by-loom-woman-live-in-the-countryside-making-basketwork-pallet-is-the.webp?b=1&s=170667a&w=0&k=20&c=INzlnSQgpyuopOstxy28qA0O1rFzkQlNZqasg_aC9bU="
              alt="Women Collaboration"
            />
          </div>
          <div className="text-section">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Building a Supportive Network
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our platform connects women with experienced mentors, industry
              leaders, and like-minded peers to foster collaboration and
              innovation.
            </p>
            <a href="#learn-more-2">
              <button className="btn bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {authUser ? (
        ""
      ) : (
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Become a part of a growing community of women in entrepreneurship. Sign up
              today to start your journey!
            </p>
            <Link to="/signup">
              <button className="btn bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-200">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
