"use client";

import { BiBarChart, BiHome, BiObjectsVerticalBottom } from "react-icons/bi";
import { MdManageSearch, MdOutlineLiveTv } from "react-icons/md";

import { FiSettings } from "react-icons/fi";
import { Fragment } from "react";
import Link from "next/link";
import { NavHeader } from "./NavHeader";
import { NavItem } from "./NavItem";
import { Resources } from "i18next";
import { TbTournament } from "react-icons/tb";
import { leftSideBarStyles } from "./LeftSideBar.styles";
import { twMerge } from "tailwind-merge";
import unfoldsNavState from "@/recoil/leftSideBar";
import { usePathname } from "next/navigation";
import { useRecoilState } from "recoil";

type HomeContentId = keyof Resources["resources"]["home"]["navigation"];
export type HomeIconName = keyof Resources["resources"]["home"]["navigation"];
type NavItem =
  | {
      id: HomeContentId;
      icon: HomeIconName;
      name: string;
    }
  | {
      id: "divider";
    };

const NAV_ITEMS: ReadonlyArray<NavItem> = [
  { id: "dashboard", icon: "dashboard", name: "대시보드" },
  { id: "divider" },
  { id: "live", icon: "live", name: "라이브" },
  { id: "league", icon: "league", name: "리그 진행" },
  { id: "statistics", icon: "statistics", name: "통계" },
  { id: "analysis", icon: "analysis", name: "분석" },
  { id: "divider" },
  { id: "settings", icon: "settings", name: "설정" },
];

interface LeftSidebarProps {
  className: string;
}

const LeftSideBar = (props: LeftSidebarProps) => {
  const { className } = props;

  const [unfoldsNav, setUnfoldsNav] = useRecoilState(unfoldsNavState);
  const toggleUnfoldsNav = () => setUnfoldsNav((prev) => !prev);

  const pathname = usePathname();

  const navClasses = twMerge(
    leftSideBarStyles.nav_container({
      fold: unfoldsNav ? "unfold" : "fold",
    }),
    className,
  );

  const navItemClasses = (path: string) =>
    twMerge(
      leftSideBarStyles.nav_item_container({
        active: path === pathname,
      }),
    );

  const iconNameToComponent = (iconName: HomeIconName) => {
    switch (iconName) {
      case "dashboard":
        return <BiHome color="white" />;
      case "live":
        return <MdOutlineLiveTv color="white" />;
      case "league":
        return <TbTournament color="white" />;
      case "statistics":
        return <MdManageSearch />;
      case "analysis":
        return <BiBarChart color="white" />;
      case "settings":
        return <FiSettings color="white" />;
      default:
        return <></>;
    }
  };

  return (
    <nav className={navClasses}>
      <NavHeader showLogo={unfoldsNav} onClickButton={toggleUnfoldsNav} />
      {NAV_ITEMS.map((navItem, index) => (
        <Fragment key={index}>
          {(() => {
            switch (navItem.id) {
              case "divider":
                return <hr className="w-full h-px border-0 bg-neutral-800" />;

              default:
                return (
                  <Link
                    href={{
                      pathname: navItem.id,
                    }}
                    className={navItemClasses(navItem.id)}
                  >
                    {/* TODO:  translation issue*/}
                    <NavItem
                      itemLabel={navItem.name}
                      icon={iconNameToComponent(navItem.icon)}
                      showItemLabel={unfoldsNav}
                    />
                  </Link>
                );
            }
          })()}
        </Fragment>
      ))}
    </nav>
  );
};

export default LeftSideBar;
