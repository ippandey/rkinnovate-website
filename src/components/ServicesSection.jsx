import React from "react";
import Card from "./Card";
import { MdDoubleArrow } from "react-icons/md";
// card icons
import icon1 from "../../public/android.svg";
import icon2 from "../../public/apple.svg";
import icon3 from "../../public/cube.svg";
import icon4 from "../../public/smartwatch.svg";
import icon5 from "../../public/ux-interface.svg";
import icon6 from "../../public/app-development.svg";

const ServicesSection = () => {
  return (
    <section className="max-w-[1140px] bg-white text-center m-auto py-[60px] md:py-[120px] px-5">
      <span className="text-primary text-sm md:text-xl uppercase">
        Our Services
      </span>
      <h1 className="text-[24px] md:text-[40px] text-heading font-bold mb-[12px]">
        We build modern creative mobile experiences.
      </h1>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 gap-6 md:gap-10">
        <Card
          icon={icon1}
          title="Android Development"
          description="Our software house has been recognized by Google for outstanding Android application quality."
        />
        <Card
          icon={icon2}
          title="iOS Development"
          description="At RK Innovate, we offer pixel-perfect, responsive website design services built around aesthetics and usability."
        />
        <Card
          icon={icon3}
          title="Hybrid App Development"
          description="Our product design services cover the entire lifecycle, from prototyping to fully functional design."
        />
        <Card
          icon={icon4}
          title="Desktop App Development"
          description="Increase conversions, leads, sales, and revenue with our digital marketing services."
        />
        <Card
          icon={icon5}
          title="UI/UX Designing"
          description="Our highly experienced designers understand your vision and business goals to create effective designs."
        />
        <Card
          icon={icon6}
          title="Web App Development"
          description="Our team creates web applications that meet your business objectives and technical needs."
        />
      </div>

      {/* Hire Container */}
      <div className="flex flex-col md:flex-row mt-20 items-center justify-center gap-5">
        <h1 className="text-heading text-[28px] md:text-[34px] font-bold">
          Hire World-Class Developers
        </h1>
        <button className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 flex items-center gap-3 rounded-[30px] font-semibold">
          Hire Now <MdDoubleArrow color="white" />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
