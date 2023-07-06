import { cva } from "class-variance-authority";

const container_base = cva(["relative", "flex", "flex-col", "gap-1"], {
  variants: {
    loading: {
      true: [],
      false: [],
    },
    disabled: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      disabled: true,
      loading: true,
      className: ["cursor-progress"],
    },
    {
      disabled: true,
      loading: false,
      className: ["cursor-not-allowed"],
    },
  ],
});

const border_base = cva(["flex", "items-center", "gap-1.5"], {
  variants: {
    variant: {
      line: ["border", "border-solid", "rounded"],
      ghost: [],
      transparent: [],
    },
    color: {
      indigo: [],
      gray: [],
      black: [],
    },
    validation: {
      none: ["border-indigo-500", "focus-visible:border-indigo-500"],
      invalid: ["border-red-500", "focus-visible:border-red-500"],
      valid: ["border-green-500", "focus-visible:border-green-500"],
      warning: ["border-yellow-400", "focus-visible:border-yellow-400"],
    },
    eventType: {
      default: [],
      hover: [],
      focus: [],
      error: [],
      disabled: [],
    },
    disabled: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      variant: "line",
      eventType: "default",
      className: ["border-neutral-200"],
    },
    {
      variant: "line",
      eventType: "hover",
      className: ["hover:border-neutral-500"],
    },
    {
      variant: "line",
      eventType: "focus",
      className: ["focus:border-indigo-500", "shadow-md", "shadow-indigo-50"],
    },
    {
      variant: "line",
      eventType: "error",
      className: ["border-red-500, shadow-sm, shadow-red-50"],
    },
    {
      variant: "ghost",
      eventType: "disabled",
      className: ["bg-neutral-50", "text-neutral-700", "border-neutral-200"],
    },
    {
      variant: "ghost",
      eventType: "default",
      className: ["border-transparent"],
    },
    {
      variant: "ghost",
      eventType: "hover",
      className: ["hover:border-neutral-500"],
    },
    {
      variant: "ghost",
      eventType: "focus",
      className: ["focus:border-indigo-500", "shadow-md", "shadow-indigo-50"],
    },
    {
      variant: "ghost",
      eventType: "error",
      className: ["border-red-500"],
    },
    {
      variant: "ghost",
      eventType: "disabled",
      className: ["bg-neutral-50", "text-neutral-700", "border-neutral-200"],
    },
    {
      variant: "transparent",
      eventType: "default",
      className: ["bg-transparent", "border-transparent"],
    },
    {
      variant: "transparent",
      eventType: "hover",
      className: ["hover:border-transparent", "hover:bg-transparent"],
    },
    {
      variant: "transparent",
      eventType: "focus",
      className: ["bg-transparent, border-transparent"],
    },
    {
      variant: "transparent",
      eventType: "error",
      className: ["bg-transparent, border-transparent"],
    },
    {
      variant: "transparent",
      eventType: "disabled",
      className: ["text-neutral500", "bg-transparent, border-transparent"],
    },
    {
      variant: "line",
      disabled: false,
      // className: ["bg-white"],
    },
    {
      variant: "ghost",
      disabled: false,
      // className: ["bg-gray-50"],
    },
    {
      variant: "transparent",
      disabled: false,
      // className: ["bg-transparent"],
    },
    {
      variant: "line",
      disabled: true,
      className: ["bg-gray-100"],
    },
    {
      variant: "ghost",
      disabled: true,
      className: ["bg-gray-200"],
    },
    {
      variant: "transparent",
      disabled: true,
      className: ["bg-gray-50"],
    },
    {
      validation: "none",
      color: "indigo",
      className: ["focus-visible:border-indigo-500"],
    },
    {
      validation: "none",
      color: "gray",
      className: ["focus-visible:border-gray-500"],
    },
    {
      validation: "none",
      color: "black",
      className: ["focus-visible:border-black"],
    },
  ],
});

const input_base = cva(
  [
    "w-full",
    "h-full",
    "p-0",
    "overflow-hidden",
    "text-ellipsis",
    "border-none",
    "outline-none",
    "bg-inherit",
    "placeholder:text-neutral300",
  ],
  {
    variants: {
      variant: {
        line: [
          "text-gray-800",
          // "focus:bg-gray-50",
          "placeholder:text-gray-400",
        ],
        ghost: [
          "text-gray-800",
          // "focus:bg-gray-100",
          "placeholder:text-gray-400",
        ],
        transparent: [
          "bg-transparent",
          "border-transparent",
          "text-gray-800",
          "placeholder:text-gray-400",
        ],
      },
      color: {
        indigo: [],
        gray: [],
        black: [],
      },
      size: {
        xs: ["text-xs", "h-6"],
        sm: ["text-sm", "h-8"],
        md: ["text-base", "h-10"],
        lg: ["text-lg", "h-12"],
        xl: ["text-xl", "h-14"],
      },
      type: {
        "datetime-local": [],
        color: [],
        date: [],
        email: [],
        file: [
          "pl-0",
          "hover:cursor-pointer",
          "file:hover:cursor-pointer",
          "file:font-medium",
          "file:mr-4",
          "file:px-4",
          "file:border-0",
        ],
        number: [],
        password: [],
        range: [],
        search: [],
        text: [],
        time: [],
      },

      hasPrefixElement: {
        true: [],
        false: [],
      },
      hasSuffixElement: {
        true: [],
        false: [],
      },
      loading: {
        true: [],
        false: [],
      },
      disabled: {
        true: ["cursor-not-allowed"],
        false: [],
      },
    },
    compoundVariants: [
      {
        disabled: true,
        loading: true,
        className: ["cursor-progress"],
      },
      {
        disabled: true,
        loading: false,
        className: ["cursor-not-allowed"],
      },
      {
        type: "file",
        variant: ["line", "ghost"],
        className: [
          "file:bg-gray-100",
          "file:hover:bg-gray-200",
          "file:active:bg-gray-300",
          "file:text-gray-800",
        ],
      },
      {
        type: "file",
        variant: "transparent",
        className: [
          "file:bg-gray-50",
          "file:hover:bg-gray-100",
          "file:active:bg-gray-200",
          "file:text-gray-800",
        ],
      },
      {
        type: "file",
        size: "xs",
        className: ["file:text-xs"],
      },
      {
        type: "file",
        size: "sm",
        className: ["file:text-sm"],
      },
      {
        type: "file",
        size: "md",
        className: ["file:text-base"],
      },
      {
        type: "file",
        size: "lg",
        className: ["file:text-lg"],
      },
      {
        type: "file",
        size: "xl",
        className: ["file:text-xl"],
      },
      {
        type: "file",
        size: "xs",
        className: ["file:h-6", "file:text-xs"],
      },
      {
        type: "file",
        size: "sm",
        className: ["file:h-8"],
      },
      {
        type: "file",
        size: "md",
        className: ["file:h-10"],
      },
      {
        type: "file",
        size: "lg",
        className: ["file:h-12"],
      },
      {
        type: "file",
        size: "xl",
        className: ["file:h-14"],
      },
      {
        hasPrefixElement: false,
        hasSuffixElement: false,
        size: "xs",
        type: [
          "text",
          "number",
          "password",
          "date",
          "time",
          "email",
          "search",
          "range",
          "datetime-local",
          "color",
        ],
        className: ["px-2"],
      },
      {
        hasPrefixElement: false,
        hasSuffixElement: false,
        size: "sm",
        type: [
          "text",
          "number",
          "password",
          "date",
          "time",
          "email",
          "search",
          "range",
          "datetime-local",
          "color",
        ],
        className: ["px-3"],
      },
      {
        hasPrefixElement: false,
        hasSuffixElement: false,
        size: "md",
        type: [
          "text",
          "number",
          "password",
          "date",
          "time",
          "email",
          "search",
          "range",
          "datetime-local",
          "color",
        ],
        className: ["px-3"],
      },
      {
        hasPrefixElement: false,
        hasSuffixElement: false,
        size: "lg",
        type: [
          "text",
          "number",
          "password",
          "date",
          "time",
          "email",
          "search",
          "range",
          "datetime-local",
          "color",
        ],
        className: ["px-4"],
      },
      {
        hasPrefixElement: true,
        hasSuffixElement: false,
        size: "xs",
        className: ["pl-7", "pr-2"],
      },
      {
        hasPrefixElement: true,
        hasSuffixElement: false,
        size: "sm",
        className: ["pl-8", "pr-3"],
      },
      {
        hasPrefixElement: true,
        hasSuffixElement: false,
        size: "md",
        className: ["pl-11", "pr-3"],
      },
      {
        hasPrefixElement: true,
        hasSuffixElement: false,
        size: "lg",
        className: ["pl-12", "pr-4"],
      },
      {
        hasPrefixElement: false,
        hasSuffixElement: true,
        size: "xs",
        type: [
          "text",
          "number",
          "password",
          "date",
          "time",
          "email",
          "search",
          "range",
          "datetime-local",
          "color",
        ],
        className: ["pr-7", "pl-2"],
      },
      {
        hasPrefixElement: false,
        hasSuffixElement: true,
        size: "sm",
        type: [
          "text",
          "number",
          "password",
          "date",
          "time",
          "email",
          "search",
          "range",
          "datetime-local",
          "color",
        ],
        className: ["pr-8", "pl-3"],
      },
      {
        hasPrefixElement: false,
        hasSuffixElement: true,
        size: "md",
        type: [
          "text",
          "number",
          "password",
          "date",
          "time",
          "email",
          "search",
          "range",
          "datetime-local",
          "color",
        ],
        className: ["pr-11", "pl-3"],
      },
      {
        hasPrefixElement: false,
        hasSuffixElement: true,
        size: "lg",
        type: [
          "text",
          "number",
          "password",
          "date",
          "time",
          "email",
          "search",
          "range",
          "datetime-local",
          "color",
        ],
        className: ["pr-12", "pl-4"],
      },
      {
        hasPrefixElement: true,
        hasSuffixElement: true,
        size: "xs",
        className: ["px-7"],
      },
      {
        hasPrefixElement: true,
        hasSuffixElement: true,
        size: "sm",
        className: ["px-8"],
      },
      {
        hasPrefixElement: true,
        hasSuffixElement: true,
        size: "md",
        className: ["px-11"],
      },
      {
        hasPrefixElement: true,
        hasSuffixElement: true,
        size: "lg",
        className: ["px-12"],
      },
    ],
  },
);

const icon = cva([], {
  variants: {
    variant: {
      line: ["text-gray-600", "fill-gray-600"],
      ghost: ["text-gray-600", "fill-gray-600"],
      transparent: ["text-gray-600", "fill-gray-600"],
    },
    size: {
      xs: ["h-3.5", "w-3.5"],
      sm: ["h-4", "w-4"],
      md: ["h-5", "w-5"],
      lg: ["h-6", "w-6"],
      xl: ["h-7", "w-7"],
    },
  },
});

const input_wrapper = cva(["relative", "flex", "items-center", "w-full"]);

const prefix_element_wrapper = cva(["absolute", "left-0", "z-20"], {
  variants: {
    size: {
      xs: ["pl-2"],
      sm: ["pl-2.5"],
      md: ["pl-3"],
      lg: ["pl-3"],
      xl: ["pl-3"],
    },
  },
});

const suffix_element_wrapper = cva(["absolute", "right-0", "z-20"], {
  variants: {
    size: {
      xs: ["pr-2"],
      sm: ["pr-2.5"],
      md: ["pr-3"],
      lg: ["pr-3"],
      xl: ["pr-3"],
    },
  },
});

const inputStyles = {
  container_base,
  border_base,
  input_base,
  icon,
  input_wrapper,
  prefix_element_wrapper,
  suffix_element_wrapper,
};

export { inputStyles };
