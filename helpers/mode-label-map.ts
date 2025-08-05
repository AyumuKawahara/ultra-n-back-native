import type { Mode } from "@/types/mode";

export const modeLabelMap: Record<Mode, { label: string; required: boolean }> =
  {
    place: {
      label: "場所",
      required: true,
    },
    character: {
      label: "文字",
      required: true,
    },
    color: {
      label: "色",
      required: false,
    },
    shape: {
      label: "形",
      required: false,
    },
  };
