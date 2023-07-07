import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "@/theme/theme.context";

interface SpinnerProps extends ComponentPropsWithRef<"svg"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "gray" | "slate" | "white";
}

const Spinner = (props: SpinnerProps) => {
  const { size = "md", className } = props;

  const theme = useComponentTheme("Spinner");
  const classes = twMerge(theme.spinnerBase({ size, className }));

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M7.60769 19.6078C9.11235 20.4765 10.8408 20.8795 12.5745 20.7659C14.3083 20.6522 15.9693 20.027 17.3477 18.9694C18.7261 17.9117 19.7599 16.469 20.3184 14.8238C20.8769 13.1786 20.935 11.4047 20.4853 9.72643C20.0356 8.0482 19.0984 6.54101 17.7921 5.39544C16.4858 4.24987 14.8692 3.51738 13.1466 3.2906C11.4241 3.06382 9.67292 3.35293 8.11467 4.12138C6.55641 4.88983 5.26102 6.10309 4.39231 7.60775L5.91384 8.48621C6.60882 7.28249 7.64513 6.31187 8.89173 5.69712C10.1383 5.08236 11.5392 4.85107 12.9173 5.03249C14.2954 5.21392 15.5887 5.79991 16.6337 6.71636C17.6787 7.63282 18.4285 8.83857 18.7882 10.1812C19.148 11.5237 19.1015 12.9429 18.6547 14.259C18.2079 15.5752 17.3809 16.7294 16.2782 17.5755C15.1755 18.4216 13.8466 18.9218 12.4596 19.0127C11.0727 19.1036 9.68988 18.7812 8.48616 18.0862L7.60769 19.6078Z"
        fill="black"
        fillOpacity="0.13"
      />
      <path
        d="M20.7845 11.9999C20.7845 10.2625 20.2693 8.56409 19.3041 7.11947C18.3388 5.67485 16.9668 4.54891 15.3617 3.88402C13.7565 3.21913 11.9902 3.04517 10.2861 3.38413C8.5821 3.72308 7.01683 4.55973 5.78828 5.78828C4.55973 7.01683 3.72308 8.5821 3.38413 10.2861C3.04517 11.9902 3.21913 13.7565 3.88402 15.3617C4.54891 16.9668 5.67485 18.3388 7.11947 19.3041C8.5641 20.2693 10.2625 20.7845 11.9999 20.7845V19.0276C10.61 19.0276 9.25126 18.6155 8.09557 17.8432C6.93987 17.071 6.03911 15.9735 5.5072 14.6893C4.9753 13.4052 4.83612 11.9921 5.10729 10.6289C5.37845 9.26567 6.04778 8.01345 7.03062 7.03062C8.01346 6.04778 9.26567 5.37845 10.6289 5.10729C11.9921 4.83612 13.4052 4.9753 14.6893 5.5072C15.9735 6.03911 17.071 6.93987 17.8432 8.09557C18.6155 9.25126 19.0276 10.61 19.0276 11.9999H20.7845Z"
        className={className}
      />
    </svg>
  );
};

export default Spinner;