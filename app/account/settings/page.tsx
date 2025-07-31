import DeleteAccountDialog from "@/components/account/settings/delete-account-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <section className="flex flex-col gap-2">
        <header className="text-xl font-bold">Two-factor authentication</header>
        <p className="text-muted-foreground">
          Two-Factor Authentication (2FA) is a security method that requires
          users to provide two different forms of identification to access an
          account or system. It adds an extra layer of protection beyond
          traditional passwords, significantly enhancing the security of your
          accounts.
        </p>
        <Button className="w-fit mt-2">Enable</Button>
      </section>

      <Separator />

      <section className="flex flex-col gap-2">
        <header className="text-xl font-bold">Delete account</header>
        <p className="text-muted-foreground">
          This action will permanently delete your account.
        </p>
        <DeleteAccountDialog />
      </section>
    </div>
  );
}
