import { atom } from "recoil";

const storedLevelId = localStorage.getItem("currentLevelId");
const defaultLevelId = "TutorialLevel";

export const currentLevelIdAtom = atom({
  key: "currentLevelIdAtom",
  default: defaultLevelId,
});
