import { CheckBoxColor, CheckBoxSize, CheckBoxTone } from "./CheckBox.types";
import { ComponentPropsWithRef, forwardRef, useMemo } from "react";

import { Check } from "./Check";
import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "@/theme/theme.context";

export interface CheckboxProps
  extends Omit<ComponentPropsWithRef<"input">, "type" | "size"> {
  color?: CheckBoxColor;
  disabled?: boolean;
  size?: CheckBoxSize;
  tone?: CheckBoxTone;
  indeterminate?: boolean;
}

const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    color = "indigo",
    disabled = false,
    size = "md",
    tone = "fill",
    value,
    checked,
    readOnly,
    className,
    children,
    indeterminate,
    onChange,
    ...rest
  } = props;

  const theme = useComponentTheme("CheckBox");

  const labelClasses = useMemo(() => {
    return twMerge(
      theme.labelBase({
        className,
        disabled,
      }),
    );
  }, [className, disabled, theme]);

  const checkBoxClasses = useMemo(() => {
    return twMerge(
      theme.checkBoxBase({
        className,
      }),
    );
  }, [className, theme]);

  const checkClasses = useMemo(() => {
    return twMerge(
      theme.checkBase({
        status: checked || indeterminate ? "on" : "off",
        color,
        size,
        tone,
        disabled,
        className,
      }),
    );
  }, [checked, className, color, disabled, indeterminate, size, theme, tone]);

  return (
    <label className={labelClasses}>
      <input
        type="checkbox"
        ref={ref}
        value={value}
        checked={checked}
        disabled={disabled}
        readOnly={readOnly}
        onChange={readOnly ? undefined : onChange}
        className={checkBoxClasses}
        {...rest}
        style={{
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
        }}
      />
      <Check
        isChecked={Boolean(checked)}
        indeterminate={indeterminate}
        className={checkClasses}
      />
      {children}
    </label>
  );
});
CheckBox.displayName = "CheckBox";

export default CheckBox;
