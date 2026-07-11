import { NavLink } from "react-router-dom";

interface NavLinksProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLinks = ({ to, children, onClick }: NavLinksProps) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-base font-semibold px-4 py-2 rounded-lg transition-all duration-300
        ${
          isActive
            ? "text-white bg-perf-gold"
            : "text-perf-text-main hover:text-perf-gold"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinks;
