import { AuthWrapper } from "@/components/auth/auth-wrapper";
import RegisterForm from "@/components/auth/register/register-form";

export default function RegisterPage() {
  return (
    <AuthWrapper
      title="Create account"
      changePageHref="/auth/login"
      changePageLabel="Already have an account?"
      changePageName="Sign in"
    >
      <RegisterForm />
    </AuthWrapper>
  );
}
