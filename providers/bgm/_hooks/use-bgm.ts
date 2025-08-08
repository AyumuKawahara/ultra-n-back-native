import { useContext } from "react";
import { BgmContext } from "../_context/index";

export const useBgm = () => {
  const ctx = useContext(BgmContext);
  if (!ctx) throw new Error("useBgm must be used within BgmProvider");
  return ctx;
};
