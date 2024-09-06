import React from "react";
import SectionHeadline from "./SectionHeadline";
import Image from "next/image";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Contacts = () => {
  const t = useTranslations("Contacts");

  return (
    <div className="my-16 px-6 md:px-16 lg:px-44">
      <SectionHeadline sectionTitle={t("contacts")} />

      <div className="mt-12 flex flex-col md:flex-row justify-between">
        {/* Contact Description */}
        <p className="w-full md:w-1/2 mb-8 md:mb-0">
          {t("contactDescription")}
        </p>

        {/* Contact Details */}
        <div className="border border-white p-4 w-full md:w-auto">
          <h3 className="text-xl font-bold">{t("contactHere")}</h3>
          <div className="flex items-center mt-4">
            <FaRegEnvelope className="text-xl" />
            <p className="ml-2">yacineayachi9@gmail.com</p>
          </div>
          <div className="flex items-center mt-2">
            <FaWhatsapp className="text-xl" />
            <p className="ml-2">+216 20072544</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
