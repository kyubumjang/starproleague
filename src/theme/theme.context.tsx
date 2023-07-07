"use client";

import * as styles from "./styles";

import { Provider, createContext, useContext } from "react";

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
  Button: {
    buttonBase: typeof styles.buttonStyles.button_base;
    chevron: typeof styles.buttonStyles.chevron;
    spinner: typeof styles.buttonStyles.spinner;
  };
  CheckBox: {
    labelBase: typeof styles.checkBoxStyles.label_base;
    checkBoxBase: typeof styles.checkBoxStyles.check_box_base;
    checkBase: typeof styles.checkBoxStyles.check_base;
  };
  Input: {
    containerBase: typeof styles.inputStyles.container_base;
    borderBase: typeof styles.inputStyles.border_base;
    inputBase: typeof styles.inputStyles.input_base;
    icon: typeof styles.inputStyles.icon;
    inputWrapper: typeof styles.inputStyles.input_wrapper;
    prefixElementWrapper: typeof styles.inputStyles.prefix_element_wrapper;
    suffixElementWrapper: typeof styles.inputStyles.suffix_element_wrapper;
  };
};

const defaultTheme: Theme = {
  components: {
    Button: {
      buttonBase: styles.buttonStyles.button_base,
      chevron: styles.buttonStyles.chevron,
      spinner: styles.buttonStyles.spinner,
    },
    CheckBox: {
      labelBase: styles.checkBoxStyles.label_base,
      checkBoxBase: styles.checkBoxStyles.check_box_base,
      checkBase: styles.checkBoxStyles.check_base,
    },
    Input: {
      containerBase: styles.inputStyles.container_base,
      borderBase: styles.inputStyles.border_base,
      inputBase: styles.inputStyles.input_base,
      icon: styles.inputStyles.icon,
      inputWrapper: styles.inputStyles.input_wrapper,
      prefixElementWrapper: styles.inputStyles.prefix_element_wrapper,
      suffixElementWrapper: styles.inputStyles.suffix_element_wrapper,
    },
  },
};

export type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});

export const ThemeProvider: Provider<ThemeContextType> = ThemeContext.Provider;

export function useTheme(): Theme {
  return useContext(ThemeContext)?.theme || defaultTheme;
}

export function useComponentTheme<C extends keyof ThemeComponents>(
  component: C,
) {
  const theme = useTheme();

  return theme.components[component];
}
