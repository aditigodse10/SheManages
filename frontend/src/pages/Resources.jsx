import React, { useEffect, useState } from "react";
import Resource from "../images/resources-hero.png";
// import axios from "axios";
import { FaArrowsAlt } from "react-icons/fa";
import threegirl from "../images/threegirl.jpg";
const Resources = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    // Simulating API call with hardcoded data for now
    const fetchScholarships = async () => {
      const data = [
        {
          name: "Adobe Research Women-In-Technology Scholorship",
          link: "https://research.adobe.com/scholarship/",
        },
        {
          name: "Google Women Techmakers Scholars Program",
          link: "https://www.womentechmakers.com/scholars",
        },
        {
          name: "Microsoft Women’s Research Fellowship Program",
          link: "https://research.microsoft.com/en-us/collaboration/awards/fellows-women.aspx",
        },
        {
          name: "Women Who Tech Startup Challenge",
          link: "https://www.womenwhotech.com/",
        },
        {
          name: "AnitaB.org Grace Hopper Celebration Scholarships",
          link: "https://ghc.anitab.org/agenda/scholarships/",
        },
        {
          name: "IBM Women in Technology",
          link: "https://www.ibm.com/employment/us-en/women-in-technology.html",
        },
        {
          name: "Society of Women Engineers Scholarships",
          link: "https://swe.org/scholarships/",
        },
        {
          name: "Zonta International Amelia Earhart Fellowship",
          link: "https://www.zonta.org/Web/Programs/Education/Amelia_Earhart_Fellowship",
        },
        {
          name: "AAUW International Fellowships",
          link: "https://www.aauw.org/resources/programs/fellowships-grants/current-opportunities/international/",
        },
        {
          name: "PEO International Peace Scholarship Fund",
          link: "https://www.peointernational.org/about-peo-international-peace-scholarship-ips",
        },
      ];
      setScholarships(data);
    };
    fetchScholarships();
  }, []);
  //www.shutterstock.com/image-vector/pottery-pot-making-wife-village-man-2340274675
  return (
    <div
      className="p-12 min-h-screen"
      style={{
        backgroundImage: { threegirl },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        opacity: "1",
        height: "100%",
      }}
    >
      <section className=" shadow-md rounded-lg p-6 mb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Community is made by all of us
                <span className="text-pink-500">.</span>
              </h1>
              <p className="text-lg mb-4 text-gray-600">
                And the best way to give back to the community is by sharing.
              </p>
              <a href="#scholarships">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-red-600 transition duration-300 transform hover:scale-105">
                  Take me to resources ⚡️
                </button>
              </a>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                className="max-w-full h-auto rounded-lg shadow-lg"
                src={Resource}
                alt="resources-hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="" className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="sm:text-4xl text-2xl font-extrabold mb-8 text-pink-600 text-center">
            Scholarships & Yojanas
          </h1>
          <ul className="space-y-4">
            {scholarships.map((scholarship, index) => (
              <li
                key={index}
                className="sm:text-lg text-base my-auto text-gray-700 bg-slate-100 h-20 rounded-lg shadow-md overflow-hidden"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={scholarship.link}
                  className="flex items-center justify-start h-full w-full text-blue-800 hover:text-white hover:bg-gradient-to-r from-purple-500 to-violet-500 transform hover:scale-105 transition duration-300 p-2"
                >
                  <FaArrowsAlt className="m-1" /> {scholarship.name} ↗️
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Other Resources for Women
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Networking Groups
              </h3>
              <p className="text-gray-600 mb-4">
                Join professional networks and communities for support and
                opportunities.
              </p>
              <a
                href="https://leanin.org/circles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                Lean In Circles ↗️
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Skill Development
              </h3>
              <p className="text-gray-600 mb-4">
                Enhance your skills with these resources specifically for women.
              </p>
              <a
                href="https://www.coursera.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                Coursera ↗️
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Mentorship Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Find a mentor to guide and support your career growth.
              </p>
              <a
                href="https://www.mentoring.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                Mentoring.org ↗️
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
