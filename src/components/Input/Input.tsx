import {
  ComponentPropsWithRef,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  Ref,
  cloneElement,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  InputColor,
  InputEventType,
  InputSize,
  InputType,
  InputValidation,
  InputVariant,
} from "./Input.types";

import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "@/theme/theme.context";

interface InputProps
  extends Omit<ComponentPropsWithRef<"input">, "size" | "type" | "color"> {
  variant?: InputVariant;
  color?: InputColor;
  size?: InputSize;
  type?: InputType;
  prefixElement?: JSX.Element | null;
  suffixElement?: JSX.Element | null;
  error?: boolean;
  loading?: boolean;
  disabled?: boolean;
  validation?: InputValidation;
  message?: string;
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
}

const Input = forwardRef((props: InputProps, ref?: Ref<HTMLInputElement>) => {
  const {
    className = "",
    variant = "line",
    color = "gray",
    size = "md",
    type = "text",
    prefixElement,
    suffixElement,
    error = false,
    loading = false,
    validation = "none",
    message,
    onPressEnter,
    onFocus,
    onBlur,
    onKeyDown,
    ...rest
  } = props;

  const theme = useComponentTheme("Input");

  const [inputEvent, setInputEvent] = useState<InputEventType>("default");
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const hasPrefixElement = Boolean(prefixElement);
  const hasSuffixElement = Boolean(suffixElement);
  const disabled = props.disabled || loading;

  const containerClasses = useMemo(() => {
    return twMerge(
      theme.containerBase({
        disabled,
        loading,
      }),
    );
  }, [disabled, loading, theme]);

  const borderClasses = useMemo(() => {
    return twMerge(
      theme.borderBase({
        variant,
        disabled,
        validation,
        eventType: inputEvent,
      }),
    );
  }, [theme, variant, disabled, validation, inputEvent]);

  const inputClasses = useMemo(() => {
    return twMerge(
      theme.inputBase({
        className,
        variant,
        color,
        size,
        type,
        hasPrefixElement,
        hasSuffixElement,
        loading,
        disabled,
      }),
    );
  }, [
    className,
    color,
    disabled,
    hasPrefixElement,
    hasSuffixElement,
    loading,
    size,
    theme,
    type,
    variant,
  ]);

  useEffect(() => {
    setInputEvent((prev) =>
      disabled ? "disabled" : prev === "disabled" ? "default" : prev,
    );
  }, [disabled]);

  useEffect(() => {
    if (disabled) {
      return;
    }

    if (error) {
      setInputEvent("error");
    } else {
      const inputs = inputContainerRef?.current?.getElementsByTagName("input");
      const inputElement = inputs?.item(0);
      const isFocused = inputElement === document.activeElement;

      setInputEvent((prev) =>
        prev === "error" ? (isFocused ? "focus" : "default") : prev,
      );
    }
  }, [disabled, error]);

  useEffect(() => {
    const inputs = inputContainerRef?.current?.getElementsByTagName("input");

    if (inputs?.length === 1 && inputs?.item(0)?.type === "number") {
      const input = inputs.item(0);
      const handleWheel = (e: WheelEvent) => e.preventDefault();

      input?.addEventListener("wheel", handleWheel, { passive: false });

      return () => input?.removeEventListener("wheel", handleWheel);
    }
  }, [inputContainerRef]);

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    if (disabled || error) {
      return;
    }

    setInputEvent("focus");
    onFocus?.(e);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (disabled || error) {
      return;
    }

    setInputEvent("default");
    onBlur?.(e);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (onPressEnter && e.key === "Enter") {
      onPressEnter(e);
    }

    onKeyDown?.(e);
  };

  const handleWrapperMouseEnter = () => {
    if (disabled || error) {
      return;
    }

    setInputEvent((prev) => (prev === "focus" ? prev : "hover"));
  };

  const handleWrapperMouseLeave = () => {
    if (disabled || error) {
      return;
    }

    setInputEvent((prev) => (prev === "focus" ? prev : "default"));
  };

  const focusInput: MouseEventHandler<HTMLDivElement> = (e) => {
    const input = e.currentTarget.querySelector("input");

    input?.focus();
  };

  const inputElement = (
    <input
      type={type}
      ref={ref}
      className={inputClasses}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );

  return (
    <div className={containerClasses} ref={inputContainerRef}>
      <div
        className={borderClasses}
        onMouseEnter={handleWrapperMouseEnter}
        onMouseLeave={handleWrapperMouseLeave}
        onClickCapture={focusInput}
      >
        {hasPrefixElement || hasSuffixElement || loading ? (
          <div className={theme.inputWrapper()}>
            {prefixElement && (
              <span className={theme.prefixElementWrapper({ size })}>
                {cloneElement(prefixElement, {
                  className: theme.icon({
                    size,
                    className: prefixElement.props.className,
                  }),
                })}
              </span>
            )}
            {inputElement}
            {suffixElement && !loading && (
              <span className={theme.suffixElementWrapper({ size })}>
                {cloneElement(suffixElement, {
                  className: theme.icon({
                    size,
                    className: suffixElement.props.className,
                  }),
                })}
              </span>
            )}
            {loading && (
              <span className={theme.suffixElementWrapper({ size })}>
                {/* <Spinner size={size} color="gray" /> */}
                <div>Loading...</div>
              </span>
            )}
          </div>
        ) : (
          inputElement
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
