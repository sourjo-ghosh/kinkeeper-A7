import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="p-5 md:p-10 lg:p-15 bg-[#244D3F] text-white  flex flex-col justify-center items-center gap-3">
      <p className="font-bold text-5xl">keenKeeper</p>
      <p className="text-[15px]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <div  className=" flex flex-col gap-2 justify-center items-center">
        <h1 className="">Social Links </h1>
        <ul className="flex gap-2">
          <li className="bg-white text-black p-1.5 rounded-full text-2xl">
            <a target="_blank" href="https://www.facebook.com/Joy.Ghosh.Sourjo">
              <FaFacebook />
            </a>
          </li>
          <li className="bg-white text-black p-1.5 rounded-full text-2xl">
            <a target="_blank" href="https://www.instagram.com/sourjo__ghosh/">
              <FaSquareInstagram />
            </a>
          </li>
          <li className="bg-white text-black p-1.5 rounded-full text-2xl">
            <a target="_blank" href="https://x.com/Joy_Ghoshsourjo">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-[#FAFAFA]/50 flex-row gap-5 justify-center items-center">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-3">
            <p>Privacy Policy </p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
