import React from "react";
import { FaUsers, FaAppStoreIos } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { motion } from "framer-motion";
import dots from "../../public/dot.svg";
import heroimg from "../../public/hero-img.png";
import user from "../../public/user.png";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="max-w-[1140px] m-[100px] mx-auto flex flex-col-reverse lg:flex-row gap-[2rem] justify-between items-start">
      {/* Left Section */}
      <motion.div
        className="relative w-full lg:w-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Dots Image */}
        <motion.div
          className="circle absolute left-0 top-0 bg-[#ffece4] w-[150px] h-[150px] md:w-[200px] md:h-[200px] z-10 rounded-full"
          variants={fadeInVariants}
        >
          <img src={dots} className="absolute left-0 top-0" alt="Dots" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-bold text-[32px] leading-[40px] md:text-[45px] md:leading-[55px] z-20 relative text-heading mt-4 md:mt-0"
          variants={itemVariants}
        >
          Top Mobile App
          <br /> Development
          <br /> Company in India
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-[18px] md:text-[21px] font-roboto text-para mt-[20px] md:mt-[30px]"
          variants={itemVariants}
        >
          We solve the world&apos;s biggest problems with Expertise.
          <br />
          We help global brands with digital products on web,
          <br /> mobile, and connected platforms.
        </motion.p>

        {/* Icons Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-5 mt-6 md:mt-8"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center bg-[#e7e9ff] p-3 rounded-[14px] gap-3"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaUsers size={40} color="#838ae0" />
            <span className="text-purple">100k User Engagement</span>
          </motion.div>
          <motion.div
            className="flex items-center bg-[#ffefe8] rounded-[14px] p-3 gap-3"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaAppStoreIos size={40} color="#ec7c47" />
            <span className="text-[#ec7c47]">100+ Featured App</span>
          </motion.div>
          <motion.div
            className="flex items-center bg-[#fff7df] rounded-[14px] p-3 gap-3"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BsAndroid2 size={40} color="#8c8265" />
            <span className="text-darkGreen">600+ App Published</span>
          </motion.div>
        </motion.div>

        {/* Button and User Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mt-6 md:mt-8"
          variants={itemVariants}
        >
          <motion.button
            className="bg-primary text-white px-6 py-4 md:px-10 md:py-5 rounded-[30px] font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Talk to Our Expert →
          </motion.button>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <motion.img
              src={user}
              alt="User"
              className="rounded-full w-[60px] md:w-[70px]"
              variants={fadeInVariants}
            />
            <span>
              <h4 className="font-semibold text-lg md:text-xl">Ravindra</h4>
              <p className="text-sm md:text-base">Technical Lead</p>
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-auto mt-6 lg:mt-0"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img src={heroimg} className="w-full" alt="Hero" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
