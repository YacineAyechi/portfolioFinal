import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Link } from "../../navigation";

const ProjectsSectionHeadline = ({ sectionTitle, sectionLink }) => {
  const t = useTranslations("Projects");

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between my-8">
      {/* Title Section */}
      <h1 className="text-xl sm:text-2xl font-bold">
        <span className="text-[#C778DD]">#</span>
        {sectionTitle}
      </h1>

      {/* Divider */}
      <div className="flex-1 my-4 sm:my-0 mx-0 sm:mx-4">
        <div className="border-b border-[#C778DD] w-full sm:w-[300px] md:w-[400px] lg:w-[500px]"></div>
      </div>

      {/* Link Section */}
      <Link href={sectionLink} className="text-[#C778DD] flex items-center">
        {t("viewAll")}
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
