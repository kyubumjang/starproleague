import { DynamicTag, DynamicTagProps, TagName } from "../DynamicTag";
import {
  TextColor,
  TextFont,
  TextLetterSpacing,
  TextLineHeight,
  TextSize,
  TextVariant,
  TextWeight,
} from "./Text.types";

import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "@/theme/theme.context";
import { useComponentVariant } from "@/theme/variant.context";
import { useMemo } from "react";

export interface TextProps<T extends TagName>
  extends Pick<DynamicTagProps<T>, "children" | "className"> {
  size?: TextSize;
  color?: TextColor;
  lineHeight?: TextLineHeight;
  letterSpacing?: TextLetterSpacing;
  variant?: TextVariant;
  weight?: TextWeight;
  children: string;
  tagName?: DynamicTagProps<T>["tagName"];
  font?: TextFont;
}

const Text = <T extends TagName>(props: TextProps<T>) => {
  const variantProps = useComponentVariant("Text", props.variant) as Partial<
    TextProps<TagName>
  >;
  const {
    size = "base",
    color = "black",
    lineHeight = "normal",
    letterSpacing = "normal",
    weight,
    children,
    tagName,
    font = "notoSansKr",
    ...rest
  } = { ...props, ...variantProps };

  const theme = useComponentTheme("Text");

  const classes = useMemo(() => {
    return twMerge(
      theme.textBase({
        size,
        color,
        lineHeight,
        letterSpacing,
        weight,
        font,
      }),
    );
  }, [color, font, letterSpacing, lineHeight, size, theme, weight]);

  return (
    <DynamicTag tagName={tagName} className={classes} {...rest}>
      {children}
    </DynamicTag>
  );
};

export default Text;
