import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutForm() {
  return (
    <form className="flex-1 flex flex-col gap-6">
      <header className="text-xl font-bold">Delivery information</header>

      <div className="flex-center flex-col md:flex-row gap-8 *:w-full">
        <Label className="flex flex-col items-start gap-1">
          <span>
            First name <span className="text-red-600">*</span>
          </span>
          <Input
            placeholder="Enter first name"
            className="no-border-input !border-b-2 border-muted"
          />
        </Label>

        <Label className="flex flex-col items-start gap-1">
          <span>
            Last name <span className="text-red-600">*</span>
          </span>
          <Input
            placeholder="Enter last name"
            className="no-border-input !border-b-2 border-muted"
          />
        </Label>
      </div>

      <Label className="flex flex-col items-start gap-1">
        <span>
          Email <span className="text-red-600">*</span>
        </span>
        <Input
          placeholder="Enter email address"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Label className="flex flex-col items-start gap-1">
        <span>
          Phone <span className="text-red-600">*</span>
        </span>
        <Input
          placeholder="Enter phone number"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Label className="flex flex-col items-start gap-1">
        <span>
          Address <span className="text-red-600">*</span>
        </span>
        <Input
          placeholder="Enter address"
          className="no-border-input !border-b-2 border-muted"
        />
      </Label>

      <Label className="flex items-center-safe gap-4">
        <Checkbox />
        <span className="text-xs text-muted-foreground">
          I have read and agree to the Terms and Conditions
        </span>
      </Label>

      <Button>Pay now</Button>
    </form>
  );
}
