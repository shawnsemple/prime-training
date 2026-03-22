"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkExistingUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        window.location.replace("/");
      }
    }

    checkExistingUser();
  }, [supabase]);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    window.location.replace("/");
  }

  return (
    <main
      className="min-h-screen bg-white"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1
            className="text-blue-900 font-extrabold leading-none"
            style={{
              fontSize: "30px",
              letterSpacing: "0.12em",
              WebkitTextStroke: "0.5px #dc2626",
              margin: 0,
            }}
          >
            PRIME TRAINING
          </h1>
          <p
            style={{
              marginTop: "12px",
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Sign in to access your training program
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={{ display: "grid", gap: "12px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: "14px",
                border: "none",
                backgroundColor: "#1e3a8a",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                cursor: loading ? "default" : "pointer",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        {message && (
          <p
            style={{
              marginTop: "16px",
              textAlign: "center",
              fontSize: "14px",
              color: "#dc2626",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  );
}