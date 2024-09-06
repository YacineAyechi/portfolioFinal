import React from "react";
import SectionHeadline from "./SectionHeadline";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <div className="my-16 px-6 md:px-16 lg:px-44">
      <SectionHeadline sectionTitle={t("skills")} />

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-12">
        {/* Image Section - Hidden on mobile */}
        <div className="mb-8 md:mb-0 md:w-1/2 hidden md:block">
          <Image
            src="/illustrations/skills.svg"
            alt="Skills Image"
            className="h-auto object-contain"
            width={380}
            height={350}
          />
        </div>

        {/* Skills Grid */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 items-center mt-4">
          <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
            <h3 className="text-white font-bold">HTML5</h3>
          </div>
          <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
            <h3 className="text-white font-bold">CSS3</h3>
          </div>
          <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
            <h3 className="text-white font-bold">JavaScript</h3>
          </div>
          <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
            <h3 className="text-white font-bold">Next.js</h3>
          </div>
          <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
            <h3 className="text-white font-bold">Tailwind CSS</h3>
          </div>
          <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
            <h3 className="text-white font-bold">Shadcn UI</h3>
          </div>
          <div className="p-4 bg-[#1e1e1e] rounded-lg shadow-lg">
            <h3 className="text-white font-bold">Firebase</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
