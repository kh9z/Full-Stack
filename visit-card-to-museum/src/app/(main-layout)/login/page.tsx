import { login } from "@/app/actions/auth";
import AuthForm from "@/components/auth/auth-form";

export default async function LoginPage() {
  return (
    <>
      <p>Login</p>
      <AuthForm func={login} />
    </>
  );
}
