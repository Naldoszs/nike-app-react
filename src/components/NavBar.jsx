import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index";

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo Image" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block cursor-pointer hover:scale-[1.2] transition-all duration-300 ease-in-out">
          <img src={hamburger} alt="hamburger menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
