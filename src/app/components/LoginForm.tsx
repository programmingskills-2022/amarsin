"use client";
import Lock from "@/app/svg/Lock";
import User from "@/app/svg/User";
import Input from "@/app/ui/Input";
import { getLoginByParams } from "@/lib/logins";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  color: string;
};

export default function LoginForm({ color }: Props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userName.length || !password.length) {
      console.log(error, userName, password);
      setError("نام کاربر یا رمز عبور وارد نشده است.");
      return;
    }

    const res = await getLoginByParams(userName, password);

    const loginMeta: LoginMeta = res.Meta;

    console.log(loginMeta);
    if (loginMeta.errorCode !== -1) {
      console.log(loginMeta.message);
      setError((prev) => loginMeta.message);
      return;
    }

    setError((prev) => "");

    router.push("/home");
  };

  return (
    <form
      onSubmit={submitLogin}
      className="w-full h-screen flex flex-col justify-evenly items-center"
    >
      <div className="flex flex-col items-center gap-2">
        <Image src="/images/avatar.svg" width={80} height={80} alt="avatar" />
        <label className="text-center mx-auto">ورود به حساب کاربری</label>
      </div>

      <div className="w-full flex flex-col items-center">
        <Input
          type="text"
          labelName="نام کاربری"
          inputName={userName}
          setInputName={setUserName}
          autofocus={true}
          icon={<User size="15" color={color} />}
        />
        <Input
          type="password"
          labelName="رمز عبور"
          inputName={password}
          setInputName={setPassword}
          autofocus={false}
          icon={<Lock size="15" color={color} />}
        />
      </div>

      {error && (
        <p className="w-2/3 text-right dark:text-red-400 text-red-600 text-sm">
          {error}
        </p>
      )}

      <button className="m-4 px-4 py-2 dark:bg-slate-200 dark:text-slate-800 bg-indigo-600 text-white dark:hover:bg-slate-100 hover:bg-indigo-800 rounded-xl font-bold drop-shadow-sm w-2/3">
        ورود
      </button>
    </form>
  );
}
