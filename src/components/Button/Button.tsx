import {
  ButtonAnimation,
  ButtonColor,
  ButtonSize,
  ButtonTone,
  ButtonVariant,
} from "./Button.types";
import { ComponentPropsWithoutRef, Ref, forwardRef, useMemo } from "react";

import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "@/theme/theme.context";
import { useComponentVariant } from "@/theme/variant.context";

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "size"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  tone?: ButtonTone;
  disabled?: boolean;
  loading?: boolean;
  icon?: boolean;
  prefixElement?: JSX.Element;
  suffixElement?: JSX.Element;
  animation?: ButtonAnimation;
}

const Button = forwardRef(
  (props: ButtonProps, ref?: Ref<HTMLButtonElement>) => {
    const variantProps = useComponentVariant(
      "Button",
      props.variant,
    ) as Partial<ButtonProps>;

    const {
      variant = "primary",
      size = "md",
      color = "black",
      tone = "fill",
      disabled = false,
      loading = false,
      icon = false,
      prefixElement,
      suffixElement,
      children,
      type = "button",
      animation,
      ...rest
    } = { ...props, ...variantProps };

    const hasPrefixElement = Boolean(prefixElement);
    const hasSuffixElement = Boolean(suffixElement);

    const theme = useComponentTheme("Button");

    const classes = useMemo(() => {
      return twMerge(
        theme.buttonBase({
          size,
          color,
          tone,
          disabled,
          loading,
          icon,
          animation,
          hasPrefixElement,
          hasSuffixElement,
        }),
      );
    }, [
      animation,
      color,
      disabled,
      hasPrefixElement,
      hasSuffixElement,
      icon,
      loading,
      size,
      theme,
      tone,
    ]);

    const spinnerClasses = loading ? theme.spinner({ size }) : "";

    return (
      <button
        type={type}
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...rest}
      >
        {prefixElement && prefixElement}
        {
          loading && <div>Loading...</div>
          // <Spinner className={spinnerClasses} />
        }
        {suffixElement && suffixElement}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
