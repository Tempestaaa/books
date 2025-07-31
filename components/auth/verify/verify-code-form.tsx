import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export default function VerifyCodeForm() {
  return (
    <form className="flex flex-col gap-4">
      <Label hidden className="flex flex-col gap-2 items-start">
        <span>User ID</span>
        <Input
          defaultValue={123456789}
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Label className="flex flex-col gap-2 items-start">
        <span>Enter code</span>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Label>

      <Button type="submit">Submit</Button>

      <button
        type="button"
        className="w-fit mx-auto text-xs text-muted-foreground hover:text-foreground duration-300 underline-offset-4 hover:underline"
      >
        Resend email
      </button>
    </form>
  );
}
