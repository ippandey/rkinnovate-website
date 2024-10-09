import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
import user from "../../public/user.png";

// Variants for animation
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const TestimonialsSection = () => {
  return (
    <motion.section
      className="bg-lightGrey text-center m-auto py-[120px] sm:py-[60px] px-5"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1
        className="text-heading text-[34px] sm:text-[28px] font-bold mb-20"
        variants={fadeIn}
      >
        Happy Client Works
      </motion.h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div variants={fadeIn}>
            <div className="relative">
              <h1>
                <strong>"</strong>We partnered with Rk innovate to develop a
                custom web application for our business. Their team exhibited
                exceptional technical expertise and was always available to
                provide support and guidance throughout the project. The end
                product not only met our expectations but exceeded them in terms
                of functionality and design. Highly recommended for any software
                needs!
                <strong>"</strong>
              </h1>
            </div>
            <div className="mt-8 flex items-center justify-center gap-5">
              <img src={user} alt="Client" className="w-[50px] h-[50px]" />
              <h4 className="font-semibold">
                — John D., CTO, Tech Innovations
              </h4>
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div variants={fadeIn}>
            <div className="relative">
              <h1>
                Our experience with RK innovate has been nothing short of
                excellent. They completed our project ahead of schedule while
                maintaining a high standard of quality. The development team
                understood our business requirements perfectly and implemented
                all features seamlessly. We’re extremely satisfied with their
                work and will continue to collaborate in the future.
              </h1>
            </div>
            <div className="mt-8 flex items-center justify-center gap-5">
              <img src={user} alt="Client" className="w-[50px] h-[50px]" />
              <h4 className="font-semibold">
                — Sarah M., Operations Manager, FinTech Solutions
              </h4>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>

      <motion.div
        className="flex mt-20 items-center justify-center gap-5 flex-col sm:flex-row"
        variants={fadeIn}
      >
        <h1 className="text-heading text-[34px] sm:text-[28px] font-bold">
          Take a look at our quality work
        </h1>
        <motion.button
          className="bg-primary text-white px-10 flex items-center gap-3 py-5 rounded-[30px] font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View All Work <MdDoubleArrow color="white" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
