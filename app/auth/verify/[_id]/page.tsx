import { AuthWrapper } from "@/components/auth/auth-wrapper";
import VerifyCodeForm from "@/components/auth/verify/verify-code-form";

export default function VerifyCodePage() {
  return (
    <AuthWrapper title="Verify account">
      <VerifyCodeForm />
    </AuthWrapper>
  );
}
