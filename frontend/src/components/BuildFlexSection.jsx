import React from "react";

const BuildFlexSection = () => {
  return (
    <section
      id="build-flex"
      className="bg-gray-100 text-center pb-24 flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mt-12 mb-8">
        Built for #MinorProject2 ECE Batch '2025.        </h1>
        <p>
          <a
            href="https://github.com/Ninjaabhay/projectSheManages"
            taraget="_blank" className="text-orange-500"
          >
            More information <span className="text-pink-600">here</span>.
          </a>
        </p>
      </div>
    </section>
  );
};

export default BuildFlexSection;
