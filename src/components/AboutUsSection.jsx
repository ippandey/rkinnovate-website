import React from "react";
import { motion } from "framer-motion";
import officeview from "../../public/office-view.jpg";
// certificate icons
import cert1 from "../../public/cert-1.png";
import cert2 from "../../public/cert-2.png";
import cert3 from "../../public/cert-3.png";
import cert4 from "../../public/cert-4.png";
import cert5 from "../../public/cert-5.png";

const AboutUsSection = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-lightGrey m-auto py-[60px] md:py-[120px]">
      {/* container-1 */}
      <motion.div
        className="max-w-[1140px] m-auto text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.span
          className="text-primary text-lg md:text-xl uppercase"
          variants={fadeIn}
        >
          We Are RK Innovate
        </motion.span>
        <motion.h1
          className="text-[30px] md:text-[40px] text-heading font-bold mb-[12px]"
          variants={fadeIn}
        >
          Award Winning App Development Company
        </motion.h1>
        <motion.h3
          className="mb-[15px] text-[18px] md:text-[22px] font-bold text-heading"
          variants={fadeIn}
        >
          #1 Mobile App Company, Awarded for its Top Features/Editor Apps
          Delivered.
        </motion.h3>
        <motion.p
          className="font-roboto text-[16px] md:text-[18px] text-para px-4 md:px-28"
          variants={fadeIn}
        >
          RK Innovate started its operation in the year 2023. We are Worldwide,
          based Web, App and Digital Marketing Company. Our main Domain is Web
          Design, App Development, Digital Marketing, Product Design, and Cloud
          Services. Customer Satisfaction and the Highest rate of Customer
          Repeatability make us one of the pioneers in the field. So, what are
          you waiting for? Let us discuss your ideas and our innovation in
          detail because catering your requirement and converting it into a
          final product is our main goal.
        </motion.p>
      </motion.div>

      {/* container-2 */}
      <motion.div
        className="flex justify-center mt-[60px] md:mt-[100px] px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={officeview} alt="Office View" className="w-full md:w-auto" />
      </motion.div>

      {/* container-3 */}
      <motion.div
        className="max-w-[1140px] flex flex-col md:flex-row h-auto md:h-[326px] m-auto justify-between mt-[-100px] md:mt-[-150px] px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* btn-container */}
        <motion.div
          className="flex justify-center md:justify-start items-end h-full mb-6 md:mb-0"
          variants={fadeIn}
        >
          <button className="bg-white text-primary px-8 py-4 md:py-5 capitalize text-[16px] md:text-[17px] font-semibold border-[1px] border-primary rounded-[100px]">
            Know More About Us
          </button>
        </motion.div>

        {/* card-container */}
        <motion.div
          className="bg-primary flex flex-col md:flex-row w-full md:w-[60%] justify-between rounded-2xl p-[30px] md:p-[60px]"
          variants={fadeIn}
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-6">
            <motion.span className="text-[35px] md:text-[45px] font-bold text-white">
              <span>7500 +</span>
              <p className="text-[16px] md:text-[18px] text-white">
                Project Delivered
              </p>
            </motion.span>
            <motion.span className="text-[35px] md:text-[45px] font-bold text-white">
              3500 +
              <p className="text-[16px] md:text-[18px] text-white">
                Enterprise Clients
              </p>
            </motion.span>
            <motion.span className="text-[35px] md:text-[45px] font-bold text-white">
              540 +
              <p className="text-[16px] md:text-[18px] text-white">
                Experts Team
              </p>
            </motion.span>
            <motion.span className="text-[35px] md:text-[45px] font-bold text-white">
              20 %
              <p className="text-[16px] md:text-[18px] text-white">
                Success Years
              </p>
            </motion.span>
          </div>
          {/* right */}
          <motion.div
            className="flex items-center justify-center mt-6 md:mt-0 w-full md:w-[30%]"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">RK</h1>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* container-4 */}
      <motion.div
        className="max-w-[1140px] flex flex-wrap m-auto mt-8 gap-6 md:gap-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.span
          className="text-center flex items-center flex-col w-[45%] md:w-auto"
          variants={fadeIn}
        >
          <img src={cert1} alt="Certification 1" className="w-[80%]" />
          <p>Top App Developer Genuine Quality</p>
        </motion.span>
        <motion.span
          className="text-center flex items-center flex-col w-[45%] md:w-auto"
          variants={fadeIn}
        >
          <img src={cert2} alt="Certification 2" className="w-[80%]" />
          <p>Top App Developer Genuine Quality</p>
        </motion.span>
        <motion.span
          className="text-center flex items-center flex-col w-[45%] md:w-auto"
          variants={fadeIn}
        >
          <img src={cert3} alt="Certification 3" className="w-[80%]" />
          <p>Top App Developer Genuine Quality</p>
        </motion.span>
        <motion.span
          className="text-center flex items-center flex-col w-[45%] md:w-auto"
          variants={fadeIn}
        >
          <img src={cert4} alt="Certification 4" className="w-[80%]" />
          <p>Top App Developer Genuine Quality</p>
        </motion.span>
        <motion.span
          className="text-center flex items-center flex-col w-[45%] md:w-auto"
          variants={fadeIn}
        >
          <img src={cert5} alt="Certification 5" className="w-[80%]" />
          <p>Top App Developer Genuine Quality</p>
        </motion.span>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
