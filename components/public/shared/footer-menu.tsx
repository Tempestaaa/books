import { footer } from "@/lib/common";

export default function FooterMenu() {
  return (
    <ul className="flex-center gap-20 justify-end-safe">
      {footer.map((item) => (
        <li key={item.label} className="space-y-4">
          <header className="text-subheading">{item.label}</header>

          <ul className="flex flex-col">
            {item.children.map((sub) => (
              <li
                key={sub}
                className="py-1 text-muted-foreground hover:text-foreground duration-300 cursor-pointer hover:underline underline-offset-4"
              >
                {sub}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
