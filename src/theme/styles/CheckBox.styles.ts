import { cva } from "class-variance-authority";

const label_base = cva(
  ["flex", "items-center", "h-fit", "cursor-pointer", "gap-2"],
  {
    variants: {
      disabled: {
        true: ["cursor-not-allowed"],
        false: [],
      },
    },
  },
);

const check_box_base = cva(
  ["m-0", "p-0", "w-0", "h-0", "border-0", "rounded"],
  {
    variants: {},
  },
);

const check_base = cva([], {
  variants: {
    status: {
      on: [],
      off: ["fill-neutral-600"],
    },
    disabled: {
      true: ["fill-neutral-200"],
    },
    size: {
      xs: ["w-3", "h-3"],
      sm: ["w-4", "h-4"],
      md: ["w-5", "h-5"],
      lg: ["w-6", "h-6"],
      xl: ["w-7", "h-7"],
    },
    color: {
      blue: [
        "text-blue-500",
        "hover:text-blue-600",
        "focus:text-blue-600",
        "focus:ring-blue-100",
        "active:text-blue-700",
        "disabled:text-blue-300",
        "disabled:hover:text-blue-300",
      ],
      indigo: [
        "text-indigo-500",
        "hover:text-indigo-600",
        "focus:text-indigo-600",
        "focus:ring-indigo-100",
        "active:text-indigo-700",
        "disabled:text-indigo-300",
        "disabled:hover:text-indigo-300",
      ],
      red: [
        "text-red-500",
        "hover:text-red-600",
        "focus:text-red-600",
        "focus:ring-red-100",
        "active:text-red-700",
        "disabled:text-red-300",
        "disabled:hover:text-red-300",
      ],
      green: [
        "text-green-500",
        "hover:text-green-600",
        "focus:text-green-600",
        "focus:ring-green-100",
        "active:text-green-700",
        "disabled:text-green-300",
        "disabled:hover:text-green-300",
      ],
      yellow: [
        "text-yellow-400",
        "hover:text-yellow-500",
        "focus:text-yellow-500",
        "focus:ring-yellow-100",
        "active:text-yellow-600",
        "disabled:text-yellow-200",
        "disabled:hover:text-yellow-200",
      ],
      purple: [
        "text-purple-500",
        "hover:text-purple-600",
        "focus:text-purple-600",
        "focus:ring-purple-100",
        "active:text-purple-700",
        "disabled:text-purple-300",
        "disabled:hover:text-purple-300",
      ],
      gray: [
        "text-gray-200",
        "hover:text-gray-300",
        "focus:text-gray-300",
        "focus:ring-gray-100",
        "active:text-gray-400",
        "disabled:text-gray-100",
        "disabled:hover:text-gray-100",
      ],
      dark: [
        "text-gray-700",
        "hover:text-gray-800",
        "focus:text-gray-800",
        "focus:ring-gray-300",
        "active:text-gray-900",
        "disabled:text-gray-500",
        "disabled:hover:text-gray-500",
      ],
      black: [
        "text-gray-800",
        "hover:text-gray-900",
        "focus:text-gray-900",
        "focus:ring-gray-400",
        "active:text-black",
        "disabled:text-gray-600",
        "disabled:hover:text-gray-600",
      ],
    },
    tone: {
      fill: [
        "bg-white",
        "hover:bg-gray-50",
        "active:bg-gray-100",
        "focus:outline-0",
        "focus:outline-transparent",
        "invalid:border-red-300",
      ],
      light: [
        "bg-gray-100",
        "hover:bg-gray-200",
        "active:bg-gray-300",
        "focus:outline-0",
        "focus:outline-transparent",
        "invalid:border-red-300",
      ],
    },
    validation: {
      valid: ["outline-0", "border-gray-300"],
      invalid: ["outline-0", "border-red-300"],
    },
  },
  compoundVariants: [
    {
      status: "on",
      color: "red",
      className: "fill-red-500",
    },
    {
      status: "on",
      color: "blue",
      className: "fill-blue-500",
    },
    {
      status: "on",
      color: "indigo",
      className: "fill-indigo-500",
    },
    {
      status: "on",
      color: "green",
      className: "fill-green-500",
    },
    {
      status: "on",
      color: "yellow",
      className: "fill-yellow-500",
    },
    {
      status: "on",
      color: "purple",
      className: "fill-purple-500",
    },
    {
      status: "on",
      color: "gray",
      className: "fill-gray-500",
    },
    {
      status: "on",
      color: "black",
      className: "fill-neutral-950",
    },
    {
      status: "on",
      color: "dark",
      className: "fill-gray-700",
    },
    {
      status: "off",
      className: "fill-neutral-600",
    },
  ],
});

const checkBoxStyles = {
  label_base,
  check_box_base,
  check_base,
};

export { checkBoxStyles };
