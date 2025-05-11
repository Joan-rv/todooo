"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegUser, FaLock } from "react-icons/fa";
import Button from "./button";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/v1/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(data.error);
    } else {
      router.push("/");
    }
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded flex flex-col items-center w-fit m-6"
      >
        <label className="text-xl m-2">Login</label>
        <label className="flex items-center">
          <FaRegUser className="mx-2" />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded ml-0 m-2 px-1"
          ></input>
        </label>
        <label className="flex items-center">
          <FaLock className="mx-2" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded ml-0 m-2 px-1"
          ></input>
        </label>
        <div className="mb-1">
          <Button text="Login"></Button>
        </div>
      </form>
    </div>
  );
}
