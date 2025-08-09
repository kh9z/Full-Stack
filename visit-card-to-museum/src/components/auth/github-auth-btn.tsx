"use client";

import { signIn } from "next-auth/react";

export default function GithubAuthButton(
  props: React.ComponentPropsWithoutRef<"button">
) {
  return (
    <button
      className="nav-btn"
      type="button"
      {...props}
      onClick={() => signIn("github", { callbackUrl: "/" })}
    >
      login with GitHub
    </button>
  );
}
