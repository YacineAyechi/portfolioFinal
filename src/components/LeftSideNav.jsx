import Image from "next/image";
import React from "react";

const LeftSideNav = () => {
  return (
    <div className="">
      <div>
        <div>
          <img
            src="./image.jfif"
            alt="Yacine Ayachi Image"
            className="h-40 w-40 object-cover rounded-full"
          />
        </div>
        <p>Yacine Ayachi</p>
        <p>Front-End Developer</p>
      </div>
    </div>
  );
};

export default LeftSideNav;
