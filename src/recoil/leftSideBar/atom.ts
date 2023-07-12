import { atom } from "recoil";

const unfoldsNavState = atom<boolean>({
  key: "unfoldsNavState",
  default: false,
});

export default unfoldsNavState;
