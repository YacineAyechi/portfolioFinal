import React from "react";
import SectionHeadline from "./SectionHeadline";
import Image from "next/image";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";

const Contacts = () => {
  return (
    <div className="my-16 mx-44">
      <SectionHeadline sectionTitle="contacts" />

      <div className="mt-12 flex justify-between">
        <p className="w-1/2">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>

        <div className="border border-white p-4">
          <h3 className="text-xl font-bold ">Message me here</h3>
          <div className="flex items-center mt-4">
            <FaRegEnvelope className="text-xl" />
            <p className="ml-1">yacineayachi9@gmail.com</p>
          </div>
          <div className="flex items-center mt-2">
            <FaWhatsapp className="text-xl" />
            <p className="ml-1">+216 20072544</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
