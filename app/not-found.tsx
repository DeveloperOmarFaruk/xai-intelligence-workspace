"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1>404</h1>

        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
}
