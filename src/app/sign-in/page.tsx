"use client";

import { Button, CheckBox, Input } from "@/components";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SignInInput = {
  email: string;
  password: string;
  emailRemembered: boolean;
};

const SignIn = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-8 align-middle">
        <Image
          src="/logo-dark.png"
          alt="text-logo"
          width="360"
          height="40"
          priority={true}
        />
        <form className="flex flex-col gap-4">
          <Input
            validation="none"
            color="indigo"
            type="email"
            placeholder="이메일"
            className="w-80"
          />
          <Input type="password" placeholder="비밀번호" className="w-80" />
          <Button size="md" color="black" tone="fill" type="submit">
            로그인
          </Button>
          <div className="flex gap-2">
            <CheckBox color="black">
              <div>이메일 저장</div>
            </CheckBox>
          </div>
        </form>
        <div className="flex gap-4">
          <Link
            href={{
              pathname: "/sign-up",
            }}
          >
            회원가입
          </Link>
          {/* <Link
            href={{
              pathname: "/forgot-password",
            }}
          >
            비밀번호 찾기(서비스 예정)
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default SignIn;
