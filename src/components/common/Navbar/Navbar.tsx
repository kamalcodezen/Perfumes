import { useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import UseTheme from "../../../hooks/UseTheme";
import MobileMenu from "./MobileMenu";
import { navbarLinks } from "./navbarLinks";
import NavLinks from "./navLinks";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-11/12 mx-auto py-4">
      <section className="flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navbarLinks.map((link) => (
            <NavLinks key={link.path} to={link.path}>
              {link.label}
            </NavLinks>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <div className="hidden md:flex">
            <UseTheme />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden text-perf-gold cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu size={30} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={navbarLinks} />
      </section>
    </nav>
  );
};

export default Navbar;
