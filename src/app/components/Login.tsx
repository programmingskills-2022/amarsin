"use client";
import Image from "next/image";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import { useGeneralContext } from "@/contexts/GeneralContext";

export default function Login() {
  return (
    <div className={`w-full flex items-stretch min-h-screen`}>
      <section className="relative w-full min-h-screen flex justify-center items-center bg-blueGray-light dark:bg-slate-800 dark:text-white overflow-hidden">
        {/* right side */}
        <div className="p-4 w-full md:w-1/3 h-screen flex flex-col justify-start items-center">
          <LoginHeader />
          <LoginForm />
        </div>
        {/* left side */}
        <div className="hidden md:block w-2/3 min-h-screen overflow-hidden z-0 drop-shadow-xl">
          <div className="w-full absolute top-0 left-0">
            <Image
              src="/images/loginPic1.png"
              className="w-full h-auto object-cover -skew-x-6 -translate-x-12 opacity-50"
              alt="Login background picture"
              width={650}
              height={650}
            />
          </div>
          <div className="absolute top-5 left-5">
            <Image
              className=" rounded-xl  opacity-50"
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
