"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  async function handleLogoff() {
    await fetch("/api/v1/logoff");
    router.push("/login");
  }

  return (
    <header className="bg-sky-100 flex justify-between items-center">
      <div>
        <h1 className="font-bold text-xl p-2">todooo</h1>
      </div>
      <div>
        <Link
          href="/"
          className="bg-sky-500 hover:bg-sky-600 transition text-white p-2 m-2 rounded"
        >
          Home
        </Link>
        <Link
          href="/login"
          className="bg-sky-500 hover:bg-sky-600 transition text-white p-2 m-2 rounded"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-sky-500 hover:bg-sky-600 transition text-white p-2 m-2 rounded"
        >
          Signup
        </Link>
        <button
          onClick={handleLogoff}
          className="bg-sky-500 hover:bg-sky-600 transition text-white p-2 m-2 rounded"
        >
          Logoff
        </button>
      </div>
    </header>
  );
}
