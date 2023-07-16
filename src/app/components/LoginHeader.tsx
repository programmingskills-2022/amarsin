import Image from "next/image";
import React from "react";
import LogoAmarsin from "./LogoAmarsin";
import ThemeToggler from "@/general/ThemeToggler";

export default function LoginHeader() {
  return (
    <div className="w-full flex flex-row justify-between md:justify-end items-center">
      <div className="w-2/3 flex gap-2">
        <div className="flex flex-col rounded-full hover:bg-slate-400 dark:hover:bg-slate-600">
          <ThemeToggler />
        </div>
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
