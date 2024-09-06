"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "../../navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative flex flex-col md:flex-row justify-between my-6 mx-4 md:mx-44">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <Link href="/">
          <h1 className="font-bold text-2xl">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            Yacine Ayachi.
          </h1>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="absolute top-1 right-4 md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-[#ABB2BF]">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`w-full md:w-auto ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
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
