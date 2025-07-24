import { LucideIcon } from "lucide-react";

export interface iNavbarMenu {
  label: string;
  href: string;
}

export interface iNavbarUser extends iNavbarMenu {
  icon: LucideIcon;
}

export interface iBreadcrumb {
  label: string;
  href?: string;
}

export interface iFooter {
  label: string;
  children: string[];
}
