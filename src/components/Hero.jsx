import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-between my-16 mx-44">
      <div className="w-1/2">
        <h1 className="font-bold text-4xl">
          Hello, I am a{" "}
          <span className="text-[#C778DD] font-bold mr-0.5">Web Designer</span>{" "}
          and a{" "}
          <span className="text-[#C778DD] font-bold mr-0.5">
            front-end Web Developer
          </span>
          .
        </h1>
        <p className="my-8 w-11/12 text-[#ABB2BF]">
          I am a self-taught front-end Developer. With over 4 years of
          experience in web development and building tools to help businesses
          grow. I also have some skills in UI/UX design.
        </p>
        <button className="border-2 border-[#C778DD] py-2 px-6 rounded-md">
          Contact Me
        </button>
      </div>

      <div className="relative">
        <Image
          src="/image.jfif"
          alt="Yacine Ayachi Image"
          className=" w-96 h-96 object-cover rounded-full"
          width={384}
          height={384}
          priority
        />
        {/* Overlayed div with paragraph */}
        <div className="w-80 flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 border-[#C778DD] bg-[#282c33] text-[#ABB2BF] p-2 rounded-lg">
          <p>
            💻 Currently working on{" "}
            <Link href="/" className="font-bold text-white">
              Portfolio
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
