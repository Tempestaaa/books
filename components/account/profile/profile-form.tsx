import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ProfileForm() {
  return (
    <form className="flex gap-8 *:flex-1 mt-4">
      <section className="flex flex-col gap-8">
        <Label className="flex flex-col gap-2 items-start">
          <span>Email</span>
          <Input
            defaultValue="test@email.com"
            className="no-border-input !border-b-2 border-muted"
          />
        </Label>

        <Label className="flex flex-col gap-2 items-start">
          <span>Username</span>
          <Input
            defaultValue="Username"
            className="no-border-input !border-b-2 border-muted"
          />
        </Label>

        <Label className="flex flex-col gap-2 items-start">
          <span>Phone number</span>
          <Input
            defaultValue="0123456789"
            className="no-border-input !border-b-2 border-muted"
          />
        </Label>

        <Label className="flex-center gap-16">
          <span>Gender</span>
          <RadioGroup defaultValue="male" className="flex-center gap-8">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male-gender" />
              <Label htmlFor="male-gender">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female-gender" />
              <Label htmlFor="female-gender">Female</Label>
            </div>
          </RadioGroup>
        </Label>

        <Label className="flex flex-col gap-2 items-start">
          <span>Date of birth</span>
          <Input type="date" className="no-border-input" />
        </Label>

        <Button type="submit">Save</Button>
      </section>

      <section className="grid-center">
        <div className="flex flex-col items-center-safe gap-4">
          <div>
            <Avatar className="size-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <input
              type="file"
              id="avatar"
              accept="image/png, image/jpeg"
              hidden
            />
          </div>

          <Button type="button" asChild>
            <Label htmlFor="avatar" className="cursor-pointer">
              Choose image
            </Label>
          </Button>

          <div className="flex flex-col gap-2 items-center-safe text-xs text-muted-foreground">
            <span>Maximum file size 1 MB</span>
            <span>Format: .JPEG, .PNG</span>
          </div>
        </div>
      </section>
    </form>
  );
}
