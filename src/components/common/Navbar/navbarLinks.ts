export interface NavLinkItem {
  path: string;
  label: string;
}

export const navbarLinks: NavLinkItem[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/collections",
    label: "Collections",
  },
  {
    path: "/best-sellers",
    label: "Best Sellers",
  },
  {
    path: "/about",
    label: "Our Story",
  },
];
