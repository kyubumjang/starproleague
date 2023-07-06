"use client";

import * as styles from "./styles";

import { Provider, createContext, useContext } from "react";

export type Theme = {
  components: ThemeComponents;
};

type ThemeComponents = {
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
