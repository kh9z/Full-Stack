"use client";

export default function VariablesDisplay() {
  console.log("[CLIENT]", process.env.NEXT_PUBLIC_CLIENT_VAR);

  return (
    <p className="text-3xl font-bold text-blue-700">
      [PAGE] {process.env.NEXT_PUBLIC_PAGE_VAR}
    </p>
  );
}
