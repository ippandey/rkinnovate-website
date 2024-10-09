import React from "react";
import { FaTelegramPlane, FaLock } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative bg-form-bg bg-center bg-no-repeat bg-cover bg-fixed m-auto py-[80px] sm:py-[120px]">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-30 flex flex-col lg:flex-row gap-10 lg:gap-[10rem] justify-center items-center h-full max-w-[1240px] m-auto px-5 md:px-10">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] uppercase font-bold leading-tight">
            Have a project? <br />
            We would love <br /> to help.
          </h1>
        </div>

        {/* Form Section */}
        <div
          className="w-full lg:w-[40%] rounded-[50px] bg-white p-6 sm:p-8"
          id="contact-us"
        >
          <form
            className="py-8 px-5 sm:px-8"
            action="https://formspree.io/f/mpwzarqb"
            method="POST"
          >
            <p className="font-semibold text-heading text-[28px] sm:text-[34px] mb-5 flex items-center gap-3">
              <FaTelegramPlane /> Get in Touch
            </p>

            <div>
              <input
                type="text"
                id="name"
                className="w-full border-2 p-4 sm:p-5 rounded-[14px] text-base sm:text-lg"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="mt-5">
              <input
                type="email"
                id="email"
                className="w-full border-2 p-4 sm:p-5 rounded-[14px] text-base sm:text-lg"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mt-5">
              <input
                type="text"
                id="phone"
                className="w-full p-4 sm:p-5 border-2 rounded-[14px] text-base sm:text-lg"
                placeholder="Phone Number"
                maxLength={10}
                required
              />
            </div>

            <div className="mt-5">
              <textarea
                className="rounded-[14px] h-[150px] sm:h-[200px] border-2 w-full p-4 sm:p-5 text-base sm:text-lg"
                name="about"
                placeholder="Tell us about your project"
                required
              ></textarea>
            </div>

            <button className="mt-5 w-full bg-primary text-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-[17px] font-semibold rounded-[50px] hover:bg-white hover:text-primary border-[1px] border-primary transition-all duration-500">
              Submit
            </button>

            <span className="flex items-center gap-2 mt-5 justify-center text-sm sm:text-base">
              <FaLock /> We hate spam, and we respect your privacy.
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
