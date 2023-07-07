import { cva } from "class-variance-authority";

const spinner_base = cva(["animate-spin"], {
  variants: {
    size: {
      xs: ["w-3", "h-3"],
      sm: ["w-5", "h-5"],
      md: ["w-6", "h-6"],
      lg: ["w-8", "h-8"],
      xl: ["w-10", "h-10"],
    },
  },
});

const spinnerStyles = {
  spinner_base,
};

export { spinnerStyles };
