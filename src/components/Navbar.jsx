import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "../../navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-6 mx-4 md:mx-44">
      <div className="mb-4 md:mb-0">
        <Link href="/">
          <h1 className="font-bold text-2xl">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            Yacine Ayachi.
          </h1>
        </Link>
      </div>

      <div className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-start">
          <li className="flex mb-4 md:mb-0 md:mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/" className="font-bold text-[#ABB2BF]">
              {t("home")}
            </Link>
          </li>
          <li className="flex mb-4 md:mb-0 md:mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/projects" className="font-bold text-[#ABB2BF]">
              {t("works")}
            </Link>
          </li>
          <li className="flex mb-4 md:mb-0 md:mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/about" className="font-bold text-[#ABB2BF]">
              {t("about")}
            </Link>
          </li>
          <li className="flex mb-4 md:mb-0 md:mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/contacts" className="font-bold text-[#ABB2BF]">
              {t("contacts")}
            </Link>
          </li>
          <li className="flex">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
