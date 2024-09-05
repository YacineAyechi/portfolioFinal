import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="border-t border-white py-8 px-44">
      <div className="flex justify-between">
        <div>
          <p>Web Designer && Front-End Web Developer</p>
        </div>
        <div className="flex">
          <Link href="/" className="hover:text-[#C778DD]">
            <FaGithub className="text-2xl mr-2" />
          </Link>
          <Link href="/" className="hover:text-[#C778DD]">
            <FaFacebook className="text-2xl mr-2" />
          </Link>
          <Link href="/" className="hover:text-[#C778DD]">
            <FaInstagram className="text-2xl mr-2" />
          </Link>
          <Link href="/" className="hover:text-[#C778DD]">
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="pt-12 flex items-center justify-center">
        <p className="text-[#ABB2BF]">
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
