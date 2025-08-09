import { signup } from "@/app/actions/auth";
import AuthForm from "@/components/auth/auth-form";

export default async function SignupPage() {
  return (
    <>
      <p>Sign up</p>
      <AuthForm func={signup} extended />
    </>
  );
}
