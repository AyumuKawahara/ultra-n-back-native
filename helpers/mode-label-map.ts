import type { Mode } from "@/types/mode";

export const modeLabelMap: Record<Mode, { label: string }> = {
  place: {
    label: "場所",
  },
  character: {
    label: "文字",
  },
  color: {
    label: "色",
  },
  shape: {
    label: "形",
  },
};
