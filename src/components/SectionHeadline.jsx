import React from "react";

const SectionHeadline = ({ sectionTitle }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <span className="text-[#C778DD]">#</span>
        {sectionTitle}
      </h1>
      <div className="flex-1 mx-4">
        <div className="border-b border-[#C778DD] w-[300px]"></div>
      </div>
    </div>
  );
};

export default SectionHeadline;
