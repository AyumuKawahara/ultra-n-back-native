import type { Mode } from "@/types/mode";
import { generateRandomAlphabet } from "./_helpers/generate-random-alphabet";
import { generateRandomColor } from "./_helpers/generate-random-color";
import { generateRandomIndex } from "./_helpers/generate-random-index";
import { generateRandomShape } from "./_helpers/generate-random-shape";

export const generateQuestion = (selectedModes: Mode[]) => {
  const isActiveColor = selectedModes.includes("color");
  const isActiveShape = selectedModes.includes("shape");

  return {
    place: generateRandomIndex(),
    character: generateRandomAlphabet(),
    color: isActiveColor ? generateRandomColor() : "#1E90FF",
    shape: isActiveShape ? generateRandomShape() : "square",
  };
};
