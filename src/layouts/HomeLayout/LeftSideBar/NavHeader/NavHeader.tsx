import { BiChevronsLeft, BiMenu } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";
import { NavHeaderStyles } from "./NavHeader.styles";
import { twMerge } from "tailwind-merge";

interface NavHeaderProps {
  showLogo?: boolean;
  onClickButton?: () => void;
}

const NavHeader = (props: NavHeaderProps) => {
  const { showLogo, onClickButton } = props;

  const navHeaderClasses = twMerge(
    NavHeaderStyles.nav_header_container({
      showLogo: showLogo,
    }),
  );

  return (
    <div className={navHeaderClasses}>
      {showLogo && (
        <Link
          href={{
            pathname: "/dashboard",
          }}
        >
          <Image
            src="/logo-lsb-light.png"
            alt="starcraft pro league logo"
            width="112"
            height="56"
          />
        </Link>
      )}
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={onClickButton}
      >
        {showLogo ? <BiChevronsLeft color="white" /> : <BiMenu color="white" />}
      </div>
    </div>
  );
};

export default NavHeader;
