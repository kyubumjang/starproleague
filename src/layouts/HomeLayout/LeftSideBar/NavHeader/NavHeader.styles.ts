import { cva } from "class-variance-authority";

const nav_header_container = cva(
  ["flex", "items-center", "p-4", "box-border", "h-14"],
  {
    variants: {
      showLogo: {
        true: "justify-between",
        false: "justify-center",
      },
    },
  },
);

const NavHeaderStyles = {
  nav_header_container,
};

export { NavHeaderStyles };
