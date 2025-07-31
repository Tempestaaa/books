import { iFooter, iNavbarMenu, iNavbarUser } from "@/types/common.type";
import {
  BellIcon,
  HeartIcon,
  KeyRoundIcon,
  ListOrderedIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingCartIcon,
  User2Icon,
} from "lucide-react";

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
    href: "/account/wishlist",
  },
  {
    icon: ShoppingCartIcon,
    label: "Cart",
    href: "/cart",
  },
];

export const userMenu: iNavbarUser[] = [
  {
    icon: User2Icon,
    href: "/account/profile",
    label: "My profile",
  },
  {
    icon: ListOrderedIcon,
    href: "/account/orders",
    label: "Orders",
  },
  {
    icon: BellIcon,
    href: "/account/notifications",
    label: "Notifications",
  },
  {
    icon: HeartIcon,
    href: "/account/wishlist",
    label: "Wishlist",
  },
  {
    icon: KeyRoundIcon,
    href: "/account/change-password",
    label: "Change password",
  },
  {
    icon: SettingsIcon,
    href: "/account/settings",
    label: "Settings",
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
