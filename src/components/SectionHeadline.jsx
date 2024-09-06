import React from "react";

const SectionHeadline = ({ sectionTitle }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between my-8">
      {/* Title Section */}
      <h1 className="text-xl sm:text-2xl font-bold">
        <span className="text-[#C778DD]">#</span>
        {sectionTitle}
      </h1>

      {/* Divider */}
      <div className="flex-1 my-4 sm:my-0 mx-0 sm:mx-4">
        <div className="border-b border-[#C778DD] w-full sm:w-[200px] md:w-[300px] lg:w-[400px]"></div>
      </div>
    </div>
  );
};

export default SectionHeadline;
