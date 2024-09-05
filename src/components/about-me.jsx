import React from "react";
import SectionHeadline from "./SectionHeadline";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("AboutMe");

  return (
    <div className="my-16 mx-44">
      <SectionHeadline sectionTitle={t("about")} />

      <div className="mt-12"></div>
    </div>
  );
};

export default AboutMe;
