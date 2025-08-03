"use client";

import { FormState } from "@/app/lib/definitions";
import { useActionState } from "react";

interface Props {
  func: (
    state: FormState,
    formData: FormData
  ) => Promise<FormState | undefined>;
  extended?: boolean;
}

export default function AuthForm({ func, extended = false }: Props) {
  const [state, action, pending] = useActionState(func, undefined);

  return (
    <form
      action={action}
      className="w-96 flex flex-col items-start justify-center gap-2"
    >
      {extended && (
        <>
          <div className="w-full flex gap-2 items-center">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Name"
              className="border rounded-md p-2 w-full"
            />
          </div>
          {state?.errors?.name && (
            <p className="text-sm text-red-400">{state.errors.name}</p>
          )}
        </>
      )}

      <div className="w-full flex gap-2 items-center">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          className="border rounded-md p-2 w-full"
        />
      </div>
      {state?.errors?.email && (
        <p className="text-sm text-red-400">{state.errors.email}</p>
      )}

      <div className="w-full flex gap-2 items-center">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          className="border rounded-md p-2 w-full"
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p className="text-sm text-red-400">Password must:</p>
          <ul>
            {state.errors.password.map((error: string) => (
              <li key={error} className="text-sm text-red-400">
                - {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        disabled={pending}
        type="submit"
        className="basis-1/3 text-center text-lg nav-btn w-full max-w-40 self-center"
      >
        Confirm
      </button>
    </form>
  );
}
