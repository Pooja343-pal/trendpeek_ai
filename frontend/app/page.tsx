"use client";

import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      alert("Login successful");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-900 to-red-900 text-white flex justify-center items-center">

      <div className="w-[420px] p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-black/40 border border-gray-600"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-black/40 border border-gray-600"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-black font-semibold py-3 rounded-lg hover:bg-green-400"
        >
          Sign In →
        </button>

      </div>

    </div>
  );
}