"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectsSectionHeadline from "./ProjectsSectionHeadline";
import projectsData from "../../public/projects.json";
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");

  const latestProjects = projectsData.slice(0, 3);

  const handleSourceCodeClick = (link) => {
    if (link === "#") {
      toast.error("Source code is still not available.");
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="my-16 mx-44">
      <Toaster />
      <ProjectsSectionHeadline
        sectionTitle={t("projects")}
        sectionLink="/projects"
      />

      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project) => (
            <div key={project.id} className="overflow-hidden">
              <div className="border border-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-52"
                  width={1500}
                  height={1500}
                  priority
                />
              </div>
              <div className="border-r border-l border-b border-white py-2 px-4 text-gray-300">
                <p className="text-sm">{project.technologies}</p>
              </div>
              <div className="border-r border-l border-b border-white p-4 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 truncate">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <Link
                    href={project.liveLink}
                    className="bg-[#C778DD] w-1/2 text-center text-white py-2 px-4 rounded hover:bg-[#B567CB] transition"
                  >
                    {t("live")}
                  </Link>
                  <button
                    onClick={() =>
                      handleSourceCodeClick(project.sourceCodeLink)
                    }
                    className=" w-full bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                  >
                    {t("sourceCode")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
