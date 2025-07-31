import { AuthWrapper } from "@/components/auth/auth-wrapper";
import LoginForm from "@/components/auth/login/login-form";

export default function LoginPage() {
  return (
    <AuthWrapper
      title="Welcome back! 👋"
      changePageHref="/auth/register"
      changePageLabel="Don't have an account?"
      changePageName="Create one"
    >
      <LoginForm />
    </AuthWrapper>
  );
}
