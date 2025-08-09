"use client";

import { signIn } from "next-auth/react";

export default function GoogleAuthButton(
  props: React.ComponentPropsWithoutRef<"button">
) {
  return (
    <button
      className="nav-btn"
      type="button"
      {...props}
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      login with Google
    </button>
  );
}
