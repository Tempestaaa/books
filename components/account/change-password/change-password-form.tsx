"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";

export default function ChangePasswordForm() {
  const passwordRules = [
    "Minimum characters 8",
    "At least one uppercase character",
    "At least one lowercase character",
    "At least one special character",
    "At least one number",
  ];

  return (
    <form className="flex flex-col gap-4 w-xs">
      <Label className="flex flex-col gap-2 items-start">
        <span>Current password</span>
        <PasswordInput
          placeholder="********"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Label className="flex flex-col gap-2 items-start">
        <span>New password</span>
        <PasswordInput
          placeholder="********"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>
      <div className="space-y-4 mb-4">
        <header className="font-medium">
          Please add all necessary characters to create safe password.
        </header>

        <ul className="flex flex-col gap-2 ml-4">
          {passwordRules.map((item) => (
            <li key={item} className="text-xs list-disc text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Label className="flex flex-col gap-2 items-start">
        <span>Confirm password</span>
        <PasswordInput
          placeholder="********"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Button type="submit">Change password</Button>
    </form>
  );
}
