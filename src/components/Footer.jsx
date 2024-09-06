import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="border-t border-white py-8 px-6 md:px-16 lg:px-44">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Footer Text */}
        <div className="mb-4 md:mb-0">
          <p className="text-center md:text-left">
            Web Designer && Front-End Web Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex">
          <Link href="/" className="hover:text-[#C778DD]">
            <FaGithub className="text-2xl mr-4" />
          </Link>
          <Link href="/" className="hover:text-[#C778DD]">
            <FaFacebook className="text-2xl mr-4" />
          </Link>
          <Link href="/" className="hover:text-[#C778DD]">
            <FaInstagram className="text-2xl mr-4" />
          </Link>
          <Link href="/" className="hover:text-[#C778DD]">
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 flex justify-center">
        <p className="text-[#ABB2BF] text-center">
          {t("copyright")}{" "}
          <Link href="/" className="text-white hover:text-[#C778DD] font-bold">
            Yacine Ayachi
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
