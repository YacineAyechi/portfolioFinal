import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
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
              home
            </Link>
          </li>
          <li className="flex mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/" className="font-bold text-[#ABB2BF]">
              works
            </Link>
          </li>
          <li className="flex mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/" className="font-bold text-[#ABB2BF]">
              about-me
            </Link>
          </li>
          <li className="flex mr-8">
            <span className="text-[#C778DD] font-bold mr-0.5">#</span>
            <Link href="/" className="font-bold text-[#ABB2BF]">
              contacts
            </Link>
          </li>

          <li className="flex">
            <span className="text-[#ABB2BF] font-bold mr-0.5">EN</span>
            <Image
              src="/icons/chevron.svg"
              width={14}
              height={14}
              priority={true}
              alt="chevron"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
