import { ScaleLoader } from "react-spinners";
import { useComponentTheme } from "@/theme/theme.context";
import { useMemo } from "react";

interface ScaleSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "indigo" | "black";
}

const scaleLoaderProps = {
  sm: {
    height: "14px",
    width: "2px",
    radius: "2px",
    margin: "1px",
  },
  md: {
    height: "21px",
    width: "3px",
    radius: "3px",
    margin: "1.5px",
  },
  lg: {
    height: "28px",
    width: "4px",
    radius: "4px",
    margin: "2px",
  },
};

const ScaleSpinner = (props: ScaleSpinnerProps) => {
  const { size = "md", color = "indigo" } = props;

  const theme = useComponentTheme("ScaleSpinner");

  const classes = useMemo(() => {
    return theme.scaleSpinnerBase({});
  }, [theme]);

  return (
    <ScaleLoader
      {...scaleLoaderProps[size]}
      color={color}
      className={classes}
    />
  );
};

export default ScaleSpinner;
