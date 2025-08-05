import type { Mode } from "@/types/mode";
import type { Question } from "../../_types/question";
import { generateRandomAlphabet } from "./_helpers/generate-random-alphabet";
import { generateRandomColor } from "./_helpers/generate-random-color";
import { generateRandomIndex } from "./_helpers/generate-random-index";
import { generateRandomShape } from "./_helpers/generate-random-shape";

export const generateInitialQuestionQueue = (
  n: number,
  selectedModes: Mode[],
) => {
  const questionQueue: Question[] = [];

  const isActiveColor = selectedModes.includes("color");
  const isActiveShape = selectedModes.includes("shape");

  for (let i = 0; i < n + 1; i++) {
    questionQueue.push({
      place: generateRandomIndex(),
      character: generateRandomAlphabet(),
      color: isActiveColor ? generateRandomColor() : "blue",
      shape: isActiveShape ? generateRandomShape() : "square",
    });
  }

  return questionQueue;
};
