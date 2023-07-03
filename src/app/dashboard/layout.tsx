import { ReactNode, Suspense } from "react";

import Loading from "./loading";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <header>헤더</header>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
};

export default DashboardLayout;
