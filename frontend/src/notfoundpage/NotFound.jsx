import React from "react";

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          'url("https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px",
      }}
    >
      {/* <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
        404 Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for could not be found.
      </p>
      <img
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
        alt="Not Found"
        className="w-80 h-80 mb-8"
      /> */}
      <a
        href="/"
        className="bg-violet-500 text-white px-6 py-3 rounded-lg transition-colors hover:text-violet-800 duration-500 hover:border-4 hover:border-violet-800 hover:bg-white"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
