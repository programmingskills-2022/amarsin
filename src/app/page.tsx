"use client";
import { useRouter } from "next/navigation";
import Login from "./components/Login";

export default function Home() {
  const router: any = useRouter();
  const darkMode = true;
  return (
    <main
      className={`w-full flex items-stretch min-h-screen ${
        darkMode ? "dark" : "light"
      }`}
    >
      <Login />
    </main>
  );
}
