/** @jsxImportSource @emotion/react */
"use client";

import { Noto_Sans_KR, Roboto } from "next/font/google"; // Roboto와 한글 NotoSans를 사용합니다.

import { Text } from "@/components";
import { cn } from "@/utils/cn";

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

export default function Home() {
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
      </div>
    </main>
  );
}
