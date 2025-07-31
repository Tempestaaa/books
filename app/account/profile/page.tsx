import AccountHeader from "@/components/account/account-header";
import ProfileForm from "@/components/account/profile/profile-form";

export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      <AccountHeader
        label="My profile"
        desc="Manage profile information to keep your account secure"
      />
      <ProfileForm />
    </div>
  );
}
