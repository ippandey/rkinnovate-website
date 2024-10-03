import React from "react";
import heroimg from "../../public/hero-img.png";
import { FaAppStoreIos, FaUsers } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import dots from "../../public/dot.svg";
import user from "../../public/user.jpg";

function Home() {
  return (
    <div className=" bg-white">
      {/* section 1 */}
      <section className="max-w-[1140px] py-20  mx-auto  flex gap-[5rem] justify-between items-start">
        {/* left */}
        <div className=" relative">
          {/* dots img */}
          <div className="circle  absolute left-0 top-0 bg-[#fc7b022f] w-[200px] h-[200px] z-10 rounded-full">
            <img src={dots} className=" absolute  left-0 top-0" alt="" />
          </div>
          <h1 className=" font-bold text-[60px] leading-[72px] z-20 relative text-[#30303c]">
            Top Mobile App
            <br /> Development
            <br /> Company in India
          </h1>
          <p className=" text-[21px] font-roboto mt-[30px]">
            Reevan solve the world&apos;s biggest problems with Expertise.
            <br />
            Reevan helps global brand with digital products on web,
            <br /> mobile and connected platforms.
          </p>
          {/* icon */}
          <div className="flex gap-5 mt-8">
            <div className="flex items-center  bg-purple-200 p-3  rounded-lg  gap-3">
              <FaUsers size={40} color="#838ae0" />
              <span>100k User Engagement</span>
            </div>
            <div className="flex items-center bg-rose-200 rounded-lg p-3 gap-3">
              <FaAppStoreIos size={40} color="#ec7c47" />
              <span>100+ Featured App</span>
            </div>
            <div className="flex items-center bg-yellow-200 rounded-lg p-3 gap-3">
              <BsAndroid2 size={40} color="#8c8265" />
              <span>600+ App Published</span>
            </div>
          </div>
          <div className="flex items-center gap-10  mt-8">
            <button className=" bg-orange-500 text-white px-10 py-5 rounded-[30px] font-semibold">
              Talk to Our Expert →
            </button>
            {/* user */}
            <div className="flex items-center gap-3">
              <img src={user} alt="" className=" rounded-full gap-5 w-[70px]" />
              <span>
                <h4 className=" font-semibold text-xl">Ravindra</h4>
                <p>Technical Lead</p>
              </span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="">
          <img src={heroimg} alt="" />
        </div>
      </section>
      {/* section 2 */}
      <section className=" h-screen bg-[#fc7b022f] m-auto"></section>
    </div>
  );
}

export default Home;
