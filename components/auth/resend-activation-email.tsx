import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResendActivationEmail() {
  return (
    <form className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>Resend verify email</DialogTitle>
        <DialogDescription>
          Send activation code to your email. <br />
          Please check it.
        </DialogDescription>
      </DialogHeader>

      <Label hidden className="flex flex-col gap-2 items-start">
        <span>Email</span>
        <Input
          disabled
          defaultValue={"test@gmail.com"}
          placeholder="Enter email address"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <DialogClose asChild>
        <Button type="submit">Submit</Button>
      </DialogClose>
    </form>
  );
}
