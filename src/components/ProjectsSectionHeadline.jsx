import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsSectionHeadline = ({ sectionTitle, sectionLink }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <span className="text-[#C778DD]">#</span>
        {sectionTitle}
      </h1>
      <div className="flex-1 mx-4">
        <div className="border-b border-[#C778DD] w-[500px]"></div>
      </div>
      <Link href={sectionLink} className="text-[#C778DD] flex items-center">
        View All
        <Image
          src="/icons/arrow.svg"
          alt="Arrow Icon"
          width={20}
          height={10}
          className="ml-1"
          priority={true}
        />
      </Link>
    </div>
  );
};

export default ProjectsSectionHeadline;
