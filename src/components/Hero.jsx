import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Link } from "../../navigation";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-col md:flex-row items-center justify-between my-8 mx-4 md:mx-44">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-4">
        <h1 className="font-bold text-4xl mb-4">
          {t("greeting")}{" "}
          <span className="text-[#C778DD] font-bold mr-0.5">Web Designer</span>{" "}
          {t("et")}{" "}
          <span className="text-[#C778DD] font-bold mr-0.5">
            front-end Web Developer
          </span>
          .
        </h1>
        <p className="text-[#ABB2BF] mb-4">{t("desc")}</p>
        <Link
          href="/contacts"
          className="border-2 border-[#C778DD] py-2 px-6 rounded-md inline-block"
        >
          {t("cta")}
        </Link>
      </div>

      <div className="relative w-full md:w-auto">
        <Image
          src="/image.png"
          alt="Yacine Ayachi Image"
          className="w-48 h-48 md:w-96 md:h-96 object-cover rounded-full"
          width={384}
          height={384}
          priority
        />
        <div className="w-48 md:w-80 flex justify-center items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 md:mb-0 border-2 border-[#C778DD] bg-[#282c33] text-[#ABB2BF] p-2 rounded-lg">
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
