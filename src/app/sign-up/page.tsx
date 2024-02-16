"use client";

import { Button, CheckBox, Input } from "@/components";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  return (
    <div>
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
            tone="line"
            validation="none"
            color="indigo"
            type="email"
            placeholder="이메일"
            className="w-80"
          />
          <Input
            tone="line"
            validation="none"
            color="indigo"
            type="password"
            placeholder="비밀번호"
            className="w-80"
          />
          <Input
            tone="line"
            validation="none"
            color="indigo"
            type="password"
            placeholder="비밀번호 확인"
            className="w-80"
          />
          <div className="flex gap-2">
            <CheckBox color="black">
              {/* TODO: Notion Link */}
              <div>개인정보 제공 동의</div>
            </CheckBox>
          </div>
          <Link
            href={{
              pathname: "/sign-in",
            }}
          >
            <Button color="black" type="submit">
              회원가입
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
