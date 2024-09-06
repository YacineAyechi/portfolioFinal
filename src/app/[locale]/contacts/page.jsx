import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Contacts = () => {
  const t = useTranslations("Contacts");

  return (
    <div className="my-16 mx-4 sm:mx-8 lg:mx-16 xl:mx-44">
      <Toaster />
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-[#C778DD]">#</span>
          contacts
        </h1>
        <p className="my-2 text-sm sm:text-base">Who am i?</p>
      </div>
      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between gap-8">
        <p className="w-full sm:w-1/2 text-sm sm:text-base">
          {t("contactDescription")}
        </p>

        <div className="border border-white p-4 rounded-md">
          <h3 className="text-lg sm:text-xl font-bold ">{t("contactHere")}</h3>
          <div className="flex items-center mt-4 text-sm sm:text-base">
            <FaRegEnvelope className="text-xl" />
            <p className="ml-2">yacineayachi9@gmail.com</p>
          </div>
          <div className="flex items-center mt-2 text-sm sm:text-base">
            <FaWhatsapp className="text-xl" />
            <p className="ml-2">+216 20072544</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-2xl font-bold">
          <span className="text-[#C778DD]">#</span>
          social-media
        </h1>

        <div className="py-6 sm:py-8">
          <Link
            href="/"
            className="hover:text-[#C778DD] flex items-center mb-4 text-sm sm:text-base"
          >
            <FaGithub className="text-2xl mr-2" />
            <p>Yacine Ayachi</p>
          </Link>
          <Link
            href="/"
            className="hover:text-[#C778DD] flex items-center mb-4 text-sm sm:text-base"
          >
            <FaFacebook className="text-2xl mr-2" />
            <p>Yacine Ayachi</p>
          </Link>
          <Link
            href="/"
            className="hover:text-[#C778DD] flex items-center mb-4 text-sm sm:text-base"
          >
            <FaInstagram className="text-2xl mr-2" />
            <p>Yacine Ayachi</p>
          </Link>
          <Link
            href="/"
            className="hover:text-[#C778DD] flex items-center text-sm sm:text-base"
          >
            <FaLinkedin className="text-2xl mr-2" />
            <p>Yacine Ayachi</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
