import React from "react";
import heroimg from "../../public/hero-img.png";
import { FaAppStoreIos, FaUsers } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import dots from "../../public/dot.svg";
import user from "../../public/user.jpg";
import officeview from "../../public/office-view.jpg";

function Home() {
  return (
    <div className="bg-white">
      {/* section 1 */}
      <section className="max-w-[1140px] m-[100px]  mx-auto  flex gap-[2rem] justify-between items-start">
        {/* left */}
        <div className=" relative">
          {/* dots img */}
          <div className="circle  absolute left-0 top-0 bg-[#ffece4] w-[200px] h-[200px] z-10 rounded-full">
            <img src={dots} className=" absolute  left-0 top-0" alt="" />
          </div>
          <h1 className=" font-bold text-[45px] leading-[55px] z-20 relative text-heading">
            Top Mobile App
            <br /> Development
            <br /> Company in India
          </h1>
          <p className=" text-[21px] font-roboto text-para mt-[30px]">
            Reevan solve the world&apos;s biggest problems with Expertise.
            <br />
            Reevan helps global brand with digital products on web,
            <br /> mobile and connected platforms.
          </p>
          {/* icon */}
          <div className="flex gap-5 mt-8">
            <div className="flex items-center  bg-[#e7e9ff] p-3  rounded-[14px]  gap-3">
              <FaUsers size={40} color="#838ae0" />
              <span className=" text-purple">100k User Engagement</span>
            </div>
            <div className="flex items-center bg-[#ffefe8] rounded-[14px] p-3 gap-3">
              <FaAppStoreIos size={40} color="#ec7c47" />
              <span className=" text-orange">100+ Featured App</span>
            </div>
            <div className="flex items-center bg-[#fff7df] rounded-[14px] p-3 gap-3">
              <BsAndroid2 size={40} color="#8c8265" />
              <span className=" text-darkGreen">600+ App Published</span>
            </div>
          </div>
          <div className="flex items-center gap-10  mt-8">
            <button className=" bg-btnPrimary text-white px-10 py-5 rounded-[30px] font-semibold">
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
          <img src={heroimg} className=" w-[100%]" alt="" />
        </div>
      </section>
      {/* section 2 */}
      <section className=" bg-cream h-screen m-auto py-[120px]">
        {/* container-1 */}
        <div className="max-w-[1140px] m-auto text-center">
          <span className=" text-title text-xl uppercase">We Are Reevan</span>
          <h1 className=" text-[40px] text-heading font-bold mb-[12px]">
            Award Winning App Development Company
          </h1>
          <h3 className="mb-[15px] text-[22px] font-bold text-heading">
            #1 Mobile App Company, Awarded for its Top Features/Editor Apps
            Delivered.
          </h3>
          <p className=" font-roboto text-[18px] text-para px-28">
            Reevan started its operation in the year 1999. We are Worldwide,
            based Web, App and Digital Marketing Company. Our main Domain is Web
            Design, App Development, Digital Marketing, Product Design and Cloud
            Services. Customer Satisfaction and the Highest rate of Customer
            Repeatability make us one of the pioneers in the field. So, what are
            you waiting for? Let us discuss your ideas and our innovation in
            detail because catering your requirement and converting it into a
            final product is our main goal.
          </p>
        </div>
        {/* container-2 */}
        <div className=" mt-[100px]">
          <img src={officeview} alt="" />
        </div>
        {/* container-3 */}
        <div className="max-w-[1140px] h-[326px] m-auto mt-[-150px]">
          {/* btn-container */}
          <div className=" flex justify-start items-end h-full ">
            <button className=" bg-white text-btnPrimary px-8 py-5 text-[17px] font-medium border-[1px] border-btnPrimary rounded-[100px]">
              know more reevan
            </button>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
