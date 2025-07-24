import { iFooter, iNavbarMenu, iNavbarUser } from "@/types/common.type";
import { HeartIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";

export const navbarMenu: iNavbarMenu[] = [
  {
    label: "Our shop",
    href: "/books",
  },
  {
    label: "Genres",
    href: "/genres",
  },
  {
    label: "About us",
    href: "/about",
  },
];

export const navbarUser: iNavbarUser[] = [
  {
    icon: SearchIcon,
    label: "Search",
    href: "/search",
  },
  {
    icon: HeartIcon,
    label: "Wishlist",
    href: "/user/wishlist",
  },
  {
    icon: ShoppingCartIcon,
    label: "Cart",
    href: "/cart",
  },
];

export const footer: iFooter[] = [
  {
    label: "Infomation",
    children: ["About use", "Term of use", "Privacy policy"],
  },
  {
    label: "Help",
    children: ["Contact", "FAQs", "Return policy"],
  },
];
