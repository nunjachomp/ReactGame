import { atom } from "recoil";

const storedLevelId = localStorage.getItem("currentLevelId");
const defaultLevelId = storedLevelId || "TutorialLevel";

export const currentLevelIdAtom = atom({
  key: "currentLevelIdAtom",
  default: defaultLevelId,
});
