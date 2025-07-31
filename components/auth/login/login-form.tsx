"use client";

import ResendActivationEmail from "@/components/auth/resend-activation-email";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [showDialog, setShowDialog] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDialog(true);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2 items-start">
        <span>Email</span>
        <Input
          placeholder="Enter email address"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Label className="flex flex-col gap-2 items-start">
        <span>Password</span>
        <PasswordInput
          placeholder="********"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <div className="flex-center gap-4 justify-between">
        <Label className="flex-center">
          <Checkbox />
          <span className="text-xs">Remember me</span>
        </Label>

        <Link
          href="/auth/forgot-password"
          className="text-muted-foreground hover:text-foreground duration-300 underline-offset-4 hover:underline text-xs"
        >
          Forgot password?
        </Link>
      </div>

      {showDialog ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button">Resend</Button>
          </DialogTrigger>
          <DialogContent>
            <ResendActivationEmail />
          </DialogContent>
        </Dialog>
      ) : (
        <Button type="submit">Login</Button>
      )}
    </form>
  );
}
