"use client";

import { LeftSideBar } from "./LeftSideBar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <LeftSideBar className="" />
      {/* 
      <TopBar className="" />
      <ContentArea className="">{children}</ContentArea> */}
    </div>
  );
};

export default HomeLayout;
