import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordForm() {
  return (
    <form className="flex flex-col gap-4">
      <Label className="flex flex-col gap-1 items-start">
        <span>Email</span>
        <Input
          placeholder="Enter email address"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Button type="submit">Continue</Button>
    </form>
  );
}
