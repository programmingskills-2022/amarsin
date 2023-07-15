import Moon from "@/app/svg/Moon";
import Sun from "@/app/svg/Sun";
import Image from "next/image";
import React from "react";
import LogoAmarsin from "./LogoAmarsin";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function LoginHeader({ darkMode, toggleDarkMode }: Props) {
  return (
    <div className="w-full flex flex-row justify-between md:justify-end items-center">
      <div className="w-2/3 flex">
        {/* thats for darkmode */}
        <button
          className={`text-white hover:bg-slate-400 p-1 text-4xl rounded-full ${
            darkMode ? "hidden" : "block"
          }`}
          onClick={toggleDarkMode}
        >
          <Moon size="30px" color="#1f2937" />
        </button>
        {/* thats for lightmode */}
        <button
          className={`text-white dark hover:bg-slate-600 p-1 text-4xl rounded-full ${
            darkMode ? "block" : "hidden"
          }`}
          onClick={toggleDarkMode}
        >
          <Sun size="30px" color="#fff" />
        </button>
        <Image
          className="md:hidden opacity-50 rounded-xl"
          src="/images/logo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <LogoAmarsin />
    </div>
  );
}
