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
    path: "/all-perfumes",
    label: "Perfumes",
  },
  {
    path: "/dashboard",
    label: "Dashboard",
  },
];
