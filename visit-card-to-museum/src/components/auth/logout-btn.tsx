"use client";

import { logout } from "@/app/actions/auth";
import { signOut } from "next-auth/react";
import type { Ref } from "react";

export default function LogoutButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    ref?: Ref<HTMLButtonElement>;
  }
) {
  const handleLogout = () => {
    logout();
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <button {...props} onClick={handleLogout}>
      Logout
    </button>
  );
}
