import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2 items-start">
        <span>Email</span>
        <Input
          placeholder="Enter email address"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Label className="flex flex-col gap-2 items-start">
        <span>Username</span>
        <Input
          placeholder="Enter username"
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

      <Label className="flex flex-col gap-2 items-start">
        <span>Confirm password</span>
        <PasswordInput
          placeholder="********"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Button type="submit">Register</Button>
    </form>
  );
}
