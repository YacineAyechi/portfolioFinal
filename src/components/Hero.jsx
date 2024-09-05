import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex items-center justify-between my-16 mx-44">
      <div className="w-1/2">
        <h1 className="font-bold text-4xl">
          {t("greeting")}{" "}
          <span className="text-[#C778DD] font-bold mr-0.5">Web Designer</span>{" "}
          {t("et")}{" "}
          <span className="text-[#C778DD] font-bold mr-0.5">
            front-end Web Developer
          </span>
          .
        </h1>
        <p className="my-8 w-11/12 text-[#ABB2BF]">{t("desc")}</p>
        <button className="border-2 border-[#C778DD] py-2 px-6 rounded-md">
          {t("cta")}
        </button>
      </div>

      <div className="relative">
        <Image
          src="/image.png"
          alt="Yacine Ayachi Image"
          className="w-96 h-96 object-cover rounded-full"
          width={384}
          height={384}
          priority
        />
        <div className="w-80 flex justify-center items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 border-[#C778DD] bg-[#282c33] text-[#ABB2BF] p-2 rounded-lg">
          <p className="text-center">
            💻 {t("job")}{" "}
            <Link href="/" className="font-bold text-white">
              {t("litteralJob")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
