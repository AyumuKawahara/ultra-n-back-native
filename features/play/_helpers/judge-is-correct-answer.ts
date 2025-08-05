import type { Mode } from "@/types/mode";
import type { Answer } from "../_types/answer";
import type { Question } from "../_types/question";

export const judgeIsCorrectAnswer = (
  answer: Answer,
  questionQueue: Question[],
  setIsCorrectAnswer: (isCorrectAnswer: Answer) => void,
  numOfCorrectAnswers: number,
  setNumOfCorrectAnswers: (numOfCorrectAnswers: number) => void,
  selectedModes: Mode[],
) => {
  const currentQuestion = questionQueue[0];
  const nBackQuestion = questionQueue[questionQueue.length - 1];

  const placeActualValue = currentQuestion.place === nBackQuestion.place;
  const characterActualValue =
    currentQuestion.character === nBackQuestion.character;
  const colorActualValue = currentQuestion.color === nBackQuestion.color;
  const shapeActualValue = currentQuestion.shape === nBackQuestion.shape;

  const isColorSelected = selectedModes.includes("color");
  const isShapeSelected = selectedModes.includes("shape");

  const isAllCorrect =
    placeActualValue === answer.place &&
    characterActualValue === answer.character &&
    (isColorSelected ? colorActualValue === answer.color : true) &&
    (isShapeSelected ? shapeActualValue === answer.shape : true);

  if (isAllCorrect) {
    setNumOfCorrectAnswers(numOfCorrectAnswers + 1);
  }

  setIsCorrectAnswer({
    place: placeActualValue === answer.place,
    character: characterActualValue === answer.character,
    color: colorActualValue === answer.color,
    shape: shapeActualValue === answer.shape,
  });
};
