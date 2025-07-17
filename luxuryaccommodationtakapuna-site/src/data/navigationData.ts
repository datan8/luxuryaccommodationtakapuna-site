export interface SubMenuItem {
  title: string;
  description?: string;
  link: string;
  icon?: React.ReactNode;
}

export interface MenuItem {
  title: string;
  link: string;
  subItems?: SubMenuItem[];
}

export const mainNavItems: MenuItem[] = [
  {
    title: "Home",
    link: "/",
    subItems: [],
  },
  {
    title: "About",
    link: "/about",
    subItems: [],
  },
  {
    title: "Services",
    link: "/services",
    subItems: [],
  },
  {
    title: "Contact",
    link: "/contact",
    subItems: [],
  },
];
