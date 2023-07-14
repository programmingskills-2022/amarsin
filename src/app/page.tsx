"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router: any = useRouter();
  const darkMode = true;
  return (
    <main
      className={`w-full flex items-stretch min-h-screen ${
        darkMode ? "dark" : "light"
      }`}
    >
      {router.push("/login")}
    </main>
  );
}
