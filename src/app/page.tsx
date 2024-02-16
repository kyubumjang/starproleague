/** @jsxImportSource @emotion/react */
"use client";

import { Noto_Sans_KR, Roboto } from "next/font/google"; // Roboto와 한글 NotoSans를 사용합니다.

import { GetServerSideProps } from "next";
import Link from "next/link";
import { appWithTranslation } from "next-i18next";
import { cn } from "@/utils/cn";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--noto-sans-kr",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto",
});

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(ctx.locale ?? "ko", ["home"])),
//     },
//   };
// };

function Home() {
  return (
    <main
      className={cn(
        notoSansKr.className,
        notoSansKr.className,
        roboto.variable,
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-roboto">HomePage</h1>
        <Link href="/dashboard">대시보드 페이지 이동</Link>
        <Link href="/sign-in">로그인 페이지 이동</Link>
        <Link href="/sign-up">회원가입 페이지 이동</Link>
        <div className="w-full h-96">{/* <ScaleSpinner size="md" /> */}</div>
      </div>
    </main>
  );
}

export default appWithTranslation(Home);
