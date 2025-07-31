"use client";

import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

export default function LogoutButton() {
  return (
    <Button variant="ghost" className="w-full justify-start">
      <LogOutIcon />
      <span>Logout</span>
    </Button>
  );
}
