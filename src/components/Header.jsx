import React from "react";
import logo from "../../public/logo.png";
function Header() {
  return (
    <div className=" h-[85px] sticky  z-50 top-0 flex shadow-sm items-center justify-between px-8 bg-white border-b-2 ">
      <div>
        <img src={logo} alt="" />
      </div>

      <nav>
        <ul className="flex gap-5 font-semibold">
          <li>
            <a href="#">Why Us</a>
          </li>
          <li>
            <a href="#">What We Do</a>
          </li>
          <li>
            <a href="#">Who We Are</a>
          </li>
          <li>
            <a href="#">Work With Us</a>
          </li>
        </ul>
      </nav>

      <button className="border-2 border-violet-900 px-10 py-2 rounded-full font-semibold hover:bg-violet-900 hover:text-white">
        Contact Us
      </button>
    </div>
  );
}

export default Header;
