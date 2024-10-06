import React from "react";

import logo from "../../public/fav-icon.jpeg";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoCall, IoDesktopOutline, IoHardwareChipSharp } from "react-icons/io5";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiCyberdefenders } from "react-icons/si";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

function Footer() {
  return (
    <div className=" bg-primary">
      <div className=" m-auto pt-[80px] pb-10 px-[10] max-w-[1140px] ">
        <div className="  w-[100%] m-auto flex justify-between items-start">
          {/* 1 */}
          <div>
            <img src={logo} alt="logo" width={180} className="rounded-[24px]" />
            <p className=" text-white  text-start mt-5">
              <a href="https://maps.app.goo.gl/1bF7mWEfWJhfVJkG7">
                Kudasan, Gandhinagar <br />
                Gujarat 382421
              </a>
            </p>
            {/* social media*/}
            <div className="flex items-center gap-3 mt-5">
              <a href="#">
                <FaXTwitter color=" white" fontSize={28} />
              </a>
              <a href="#">
                <FaSquareFacebook color=" white" fontSize={28} />
              </a>
              <a href="#">
                <FaLinkedinIn color=" white" fontSize={28} />
              </a>
              <a href="#">
                <FaInstagram color=" white" fontSize={28} />
              </a>
            </div>
          </div>
          {/* 2 */}
          <div>
            <ul className=" flex items-start  justify-start gap-4 flex-col">
              <span className=" font-bold text-white text-xl">
                For Work inquiry
              </span>
              <li className="mt-3">
                <a href="#" className=" flex  text-white   items-center gap-2">
                  <IoCall color="white" size={24} />
                  +91 9558928879
                </a>
              </li>
              <li>
                <a href="#" className=" flex  text-white  items-center gap-2">
                  <FaWhatsapp color="white" size={24} />
                  +91 9558928879
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@rkinnovate.com"
                  className=" flex   text-white  items-center gap-2"
                >
                  <MdEmail tsapp color="white" size={24} />
                  hr@rkinnovate.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@rkinnovate.com"
                  className=" flex   text-white  items-center gap-2"
                >
                  <MdEmail tsapp color="white" size={24} />
                  support@rkinnovate.com
                </a>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div>
            <ul className=" flex items-start justify-start gap-4 flex-col">
              <span className=" font-bold text-white text-xl">Company</span>
              <li className=" mt-3">
                <a href="#" className=" flex  text-white  items-center gap-2">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className=" flex  text-white  items-center gap-2">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@rkinnovate.com"
                  className=" flex   text-white  items-center gap-2"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@rkinnovate.com"
                  className=" flex   text-white  items-center gap-2"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* 4 */}
          <div>
            <ul className=" flex items-start justify-start gap-4 flex-col">
              <span className=" font-bold text-white text-xl">Services</span>
              <li className=" mt-3">
                <a href="#" className=" flex  text-white  items-center gap-2">
                  <MdOutlinePhoneIphone color="white" size={24} />
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className=" flex  text-white  items-center gap-2">
                  <CgWebsite color="white" size={24} />
                  Web App Development
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@rkinnovate.com"
                  className=" flex   text-white  items-center gap-2"
                >
                  <IoDesktopOutline color="white" size={24} />
                  Desktop App Development
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@rkinnovate.com"
                  className=" flex   text-white  items-center gap-2"
                >
                  <IoHardwareChipSharp tsapp color="white" size={24} />
                  IoT Product
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@rkinnovate.com"
                  className=" flex   text-white  items-center gap-2"
                >
                  <SiCyberdefenders tsapp color="white" size={24} />
                  Cyber Security Solutions
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@rkinnovate.com"
                  className=" flex   text-white  items-center gap-2"
                >
                  <HiMiniWrenchScrewdriver tsapp color="white" size={24} />
                  Software Maintainance & Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" border-b-2 border-white pb-2 flex m-auto text-white  justify-center mt-24">
          <p>
            &copy; {new Date().getFullYear()} Rk Innovate, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
