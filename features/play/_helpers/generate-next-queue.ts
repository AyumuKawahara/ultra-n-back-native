import type { Mode } from "@/types/mode";
import type { Question } from "../_types/question";
import { generateRandomAlphabet } from "./generate-initial-question-queue/_helpers/generate-random-alphabet";
import { generateRandomColor } from "./generate-initial-question-queue/_helpers/generate-random-color";
import { generateRandomIndex } from "./generate-initial-question-queue/_helpers/generate-random-index";
import { generateRandomShape } from "./generate-initial-question-queue/_helpers/generate-random-shape";

export const generateNextQueue = (
  questionQueue: Question[],
  selectedModes: Mode[],
) => {
  const isActiveColor = selectedModes.includes("color");
  const isActiveShape = selectedModes.includes("shape");

  const nextQueue = questionQueue.slice(1);
  nextQueue.push({
    place: generateRandomIndex(),
    character: generateRandomAlphabet(),
    color: isActiveColor ? generateRandomColor() : "#1E90FF",
    shape: isActiveShape ? generateRandomShape() : "square",
  });

  return nextQueue;
};
