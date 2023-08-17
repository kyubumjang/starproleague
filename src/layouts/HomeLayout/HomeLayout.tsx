"use client";

import { ContentArea } from "./ContentArea";
import { LeftSideBar } from "./LeftSideBar";
import { ReactNode } from "react";
import { TopBar } from "./TopBar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full">
      <LeftSideBar className="h-full" />
      <div className="w-full">
        <TopBar className="" />
        <ContentArea className="">{children}</ContentArea>
      </div>
    </div>
  );
};

export default HomeLayout;
