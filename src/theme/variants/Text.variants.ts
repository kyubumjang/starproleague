import { TagName } from "@/components/DynamicTag";
import { TextProps } from "@/components/Text/Text";
import { TextVariant } from "@/components/Text";

export const textVariants: Record<
  TextVariant,
  Pick<
    TextProps<TagName>,
    "size" | "weight" | "lineHeight" | "letterSpacing" | "tagName"
  >
> = {
  d1: {
    size: "9xl",
    weight: "light",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h1",
  },
  d2: {
    size: "8xl",
    weight: "light",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h2",
  },
  d3: {
    size: "7xl",
    weight: "light",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h3",
  },
  d4: {
    size: "6xl",
    weight: "light",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h4",
  },
  h1: {
    size: "5xl",
    weight: "medium",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h1",
  },
  h2: {
    size: "4xl",
    weight: "medium",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h2",
  },
  h3: {
    size: "3xl",
    weight: "medium",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h3",
  },
  h4: {
    size: "2xl",
    weight: "medium",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h4",
  },
  h5: {
    size: "xl",
    weight: "medium",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h5",
  },
  h6: {
    size: "lg",
    weight: "medium",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "h6",
  },
  p: {
    size: "base",
    weight: "normal",
    lineHeight: "tight",
    letterSpacing: "normal",
    tagName: "p",
  },
};
