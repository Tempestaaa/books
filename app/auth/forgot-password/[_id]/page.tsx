import { AuthWrapper } from "@/components/auth/auth-wrapper";
import RenewPasswordForm from "@/components/auth/forgot-password/renew-password-form";

type Props = {
  params: Promise<{ _id: string }>;
};

export default async function RenewPasswordPage({ params }: Props) {
  const { _id } = await params;

  return (
    <AuthWrapper title="New password">
      <RenewPasswordForm _id={_id} />
    </AuthWrapper>
  );
}
