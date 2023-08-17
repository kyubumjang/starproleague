import { ReactNode } from "react";

interface ContentAreaProps {
  className: string;
  children: ReactNode;
}
const ContentArea = (props: ContentAreaProps) => {
  const { className, children } = props;

  return <div className={className}>{children}</div>;
};

export default ContentArea;
