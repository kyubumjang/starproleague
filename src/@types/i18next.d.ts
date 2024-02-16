import "i18next";
import home from "../../public/locales/ko/home.json";

declare module "i18next" {
  interface Resources {
    default: "home";
    resources: {
      home: typeof home;
    };
  }
}
