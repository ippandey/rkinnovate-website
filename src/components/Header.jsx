import logo from "../../public/logo.png";
function Header() {
  return (
    <div className=" h-[85px] sticky  z-50 top-0 flex shadow-sm items-center justify-between px-8 bg-white border-b-2 ">
      <div>
        <a href="/">
          <img src={logo} alt="logo"  className=" w-[15%]" />
        </a>
      </div>

      {/* <nav>
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
      </nav> */}

      <a href="#contact-us">
        <button className="border-2 px-10 py-2 rounded-full text-primary font-bold hover:border-primary transition-all duration-500">
          Contact Us
        </button>
      </a>
    </div>
  );
}

export default Header;
