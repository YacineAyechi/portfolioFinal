"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectsData from "../../../../public/projects.json";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";

const Projects = () => {
  const projects = projectsData;
  const t = useTranslations("Projects");

  const handleSourceCodeClick = (link) => {
    if (link === "#") {
      toast.error("Source code is still not available.");
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="my-16 mx-4 md:mx-8 lg:mx-16 xl:mx-44">
      <Toaster />
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-[#C778DD]">#</span>
          projects
        </h1>
        <p className="my-2">List of my projects</p>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="overflow-hidden">
                <div className="border border-white rounded-t-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 md:h-52"
                    width={1500}
                    height={1500}
                    priority
                  />
                </div>
                <div className="border-r border-l border-b border-white py-2 px-4 text-gray-300">
                  <p className="text-xs md:text-sm">{project.technologies}</p>
                </div>
                <div className="border-r border-l border-b border-white p-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-4 truncate">
                    {project.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <Link
                      href={project.liveLink}
                      className="bg-[#C778DD] w-full md:w-full text-center text-white py-2 px-4 rounded hover:bg-[#B567CB] transition"
                    >
                      {t("live")}
                    </Link>
                    {/* <button
                      onClick={() =>
                        handleSourceCodeClick(project.sourceCodeLink)
                      }
                      className="bg-gray-700 w-full md:w-1/2 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                    >
                      {t("sourceCode")}
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
