/** @jsxImportSource react */

import "./globals.css";

import type { Metadata } from "next";
import RootStyleRegistry from "./emotion";

export const metadata: Metadata = {
  title: "스타크래프트 프로리그",
  description:
    "스타크래프트 프로리그를 진행하는 웹사이트입니다. 메프, k리그, 아프리카 스타 리그를 진행을 하는데 편리하게 이용할 수 있습니다.",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
