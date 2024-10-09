import logo from "../../public/logo.png";
function Header() {
  return (
    <section className="bg-white shadow-sm border-b-2">
      <div className="h-[85px] sticky z-50 top-0 flex items-center justify-between px-4 md:px-8">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="w-[30%] md:w-[15%] h-auto" />
          </a>
        </div>

        {/* Uncomment to include navigation */}
        {/* <nav>
          <ul className="hidden md:flex gap-5 font-semibold">
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
          <button className="border-2 px-4 py-2 md:px-10 md:py-2 rounded-full text-primary font-bold hover:border-primary transition-all duration-500">
            Contact Us
          </button>
        </a>
      </div>
    </section>
  );
}

export default Header;
