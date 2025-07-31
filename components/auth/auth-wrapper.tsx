import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type Props = {
  title: string;
  changePageLabel?: string;
  changePageHref?: string;
  changePageName?: string;
  children: React.ReactNode;
};

export function AuthWrapper({
  title,
  changePageHref,
  changePageLabel,
  changePageName,
  children,
}: Props) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex-center flex-col gap-2">
        <CardTitle className="text-heading">{title}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>

      {changePageHref && (
        <CardFooter className="flex-center flex-col justify-center-safe gap-1 text-xs">
          <p className="text-muted-foreground">{changePageLabel}</p>
          <Link
            href={changePageHref}
            className="hover:underline underline-offset-2"
          >
            {changePageName}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
