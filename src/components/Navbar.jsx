import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Link } from "../../navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="flex justify-between my-6 mx-44">
      <div>
        <h1 className="font-bold text-2xl">
          <span className="text-[#C778DD] font-bold mr-0.5">#</span>
          Yacine Ayachi.
        </h1>
      </div>

      <div>
        <ul className="flex ">
          <li className="flex mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/" className="font-bold text-[#ABB2BF]">
              {t("home")}
            </Link>
          </li>
          <li className="flex mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/projets" className="font-bold text-[#ABB2BF]">
              {t("works")}
            </Link>
          </li>
          <li className="flex mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/about" className="font-bold text-[#ABB2BF]">
              {t("about")}
            </Link>
          </li>
          <li className="flex mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/contacts" className="font-bold text-[#ABB2BF]">
              {t("contacts")}
            </Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
