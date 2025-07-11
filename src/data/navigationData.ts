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
    title: "Blog",
    link: "/blog",
    subItems: [],
  },
  {
    title: "Contact",
    link: "/contact",
    subItems: [],
  },
];
