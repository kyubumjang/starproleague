import { cva } from "class-variance-authority";

const nav_container = cva(
  ["relative", "bg-neutral-900", "transition-all", "transform", "ease-in-out"],
  {
    variants: {
      fold: { fold: ["w-16", "min-w-16"], unfold: ["w-60", "min-w-60"] },
    },
  },
);

const nav_item_container = cva(
  ["rounded hover:cursor-pointer", "hover:bg-neutral-50"],
  {
    variants: {
      active: {
        true: "fill-neutral-400",
        false: "bg-neutral-50",
      },
    },
  },
);

const divider = cva(["bg-neutral-800", "w-full", "h-px", "border-0"]);

const leftSideBarStyles = {
  nav_container,
  nav_item_container,
  divider,
};

export { leftSideBarStyles };
