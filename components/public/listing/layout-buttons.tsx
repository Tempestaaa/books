import { Grid2X2Icon, Rows2Icon } from "lucide-react";

export default function LayoutButtons() {
  return (
    <div className="flex-center rounded border-2 border-muted">
      <label className="py-1.5 px-2 rounded has-checked:bg-foreground has-checked:text-background duration-300 cursor-pointer">
        <input defaultChecked type="radio" name="layout" hidden />
        <Grid2X2Icon />
      </label>

      <label className="py-1.5 px-2 rounded has-checked:bg-foreground has-checked:text-background duration-300 cursor-pointer">
        <input type="radio" name="layout" hidden />
        <Rows2Icon />
      </label>
    </div>
  );
}
