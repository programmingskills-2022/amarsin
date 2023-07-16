"use client";
import { useRouter } from "next/navigation";
import Login from "./components/Login";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <main className={`w-full flex items-stretch min-h-screen}`}>
      <Login />
    </main>
  );
}
