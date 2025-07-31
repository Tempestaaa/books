import { AuthWrapper } from "@/components/auth/auth-wrapper";
import ForgotPasswordForm from "@/components/auth/forgot-password/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <AuthWrapper
      title="Forgot password"
      changePageHref="/auth/login"
      changePageName="Here"
      changePageLabel="Back to login"
    >
      <ForgotPasswordForm />
    </AuthWrapper>
  );
}
