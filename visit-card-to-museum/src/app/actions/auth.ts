"use server";

import {
  FormState,
  LoginFormSchema,
  SignupFormSchema,
} from "@/app/lib/definitions";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Insert the user into the database or call an Auth Library's API
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password: hashedPassword,
        }),
      }
    );

    const user = await res.json();

    // 4. Create user session
    await createSession(user.id);
  } catch (error) {
    console.log("ERROR", error);
  }

  // 5. Redirect user
  redirect("/profile");
}

export async function login(state: FormState, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { email, password } = validatedFields.data;

  // 3. Find the user in the database
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/users/auth/${email}`
    );

    const user = await res.json();

    if ("error" in user) {
      return {
        errors: { email: ["User not found."] },
      };
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return {
        errors: { password: ["The wrong password."] },
      };
    }

    // 4. Create user session
    await createSession(user.id);
  } catch (error) {
    console.log("ERROR", error);
  }

  // 5. Redirect user
  redirect("/profile");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
