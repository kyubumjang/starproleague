"use client";

import { ReactNode, Suspense } from "react";

import { HomeLayout } from "@/layouts/HomeLayout";
import Loading from "./loading";
import { RecoilRoot } from "recoil";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <HomeLayout>{children}</HomeLayout>
        </Suspense>
      </RecoilRoot>
    </>
  );
};

export default DashboardLayout;
