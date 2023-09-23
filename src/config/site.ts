import { NavItem } from "@/types";

interface SiteConfig {
  name: string;
  description: string;
  template: string;
  baseUrl: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    github: string;
    docs: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Next js boilerplate",
  description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
  template: "%s - Reactify Next",
  baseUrl: "https://",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};
