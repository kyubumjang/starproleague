import { ButtonProps } from "@/components/Button/Button";
import { ButtonVariant } from "@/components/Button/Button.types";

export const buttonVariants: Record<
  ButtonVariant,
  Pick<ButtonProps, "color" | "tone">
> = {
  primary: {
    color: "indigo",
    tone: "fill",
  },
  secondary: {
    color: "gray",
    tone: "fill",
  },
  tertiary: {
    color: "gray",
    tone: "fill",
  },
  link: {
    color: "purple",
    tone: "fill",
  },
  danger: {
    color: "red",
    tone: "fill",
  },
  success: {
    color: "green",
    tone: "fill",
  },
  warning: {
    color: "yellow",
    tone: "fill",
  },
  info: {
    color: "blue",
    tone: "fill",
  },
};
