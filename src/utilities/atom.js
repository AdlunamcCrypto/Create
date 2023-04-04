import { atom } from "recoil";

export const addressState = atom({
  key: "addressState",
  default: "",
});

export const UIState = atom({
  key: "UIState",
  default: false,
});

export const mintState = atom({
  key: "mintState",
  default: false,
});

export const mintLoadingState = atom({
  key: "mintLoadingState",
  default: false,
});

export const mintFailed = atom({
  key: "mintFailed",
  default: false,
});

export const tokenIdState = atom({
  key: "tokenIdState",
  default: 0,
});

export const balanceState = atom({
  key: "balanceState",
  default: 0,
});
