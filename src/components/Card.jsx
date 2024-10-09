import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-[#f7f7f7] relative flex shadow-lg flex-col text-start items-start justify-between px-[20px] md:px-[30px] pb-[30px] md:pb-[40px] pt-[60px] md:pt-[79px] rounded-[14px]"
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1.0 }}
    >
      <span className="absolute shadow-md top-[-20px] left-5 bg-white rounded-[14px] p-3">
        <img src={icon} className="w-[50px] h-[50px]" alt={title} />
      </span>
      <div>
        <h3 className="text-heading text-[24px] md:text-[28px] font-bold leading-[32px] md:leading-[38px] mb-3">
          <a href="#">{title}</a>
        </h3>
        <p className="font-roboto text-[16px] md:text-[18px] text-para leading-[24px] md:leading-[28px]">
          {description}
        </p>
      </div>
      <a
        href="#"
        className="flex items-center mt-5 text-[16px] md:text-[18px] gap-1"
      >
        Read More <MdDoubleArrow color="#110a32" />
      </a>
    </motion.div>
  );
};

export default Card;
