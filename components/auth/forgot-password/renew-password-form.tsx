import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";

type Props = {
  _id: string;
};

export default function RenewPasswordForm({ _id }: Props) {
  return (
    <form className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2 items-start">
        <span>New password</span>
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

      <Button type="submit">Save</Button>
    </form>
  );
}
