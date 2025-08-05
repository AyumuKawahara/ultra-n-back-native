import type { Mode } from "@/types/mode";
import { useEffect } from "react";
import { generateNextQueue } from "../_helpers/generate-next-queue";
import type { Question } from "../_types/question";
import type { Status } from "../_types/status";
import { INTERVAL_ANSWER_QUESTION_MS } from "./use-answer-question";
import { INTERVAL_DISPLAY_ANSWER_MS } from "./use-display-answer";

const INTERVAL_BETWEEN_DISPLAY_QUESTION_MS =
  INTERVAL_ANSWER_QUESTION_MS + INTERVAL_DISPLAY_ANSWER_MS;

export const useBetweenDisplayQuestion = ({
  status,
  setStatus,
  numOfDisplayedCharacters,
  setNumOfDisplayedCharacters,
  questionQueue,
  setQuestionQueue,
  selectedModes,
}: {
  status: Status;
  setStatus: (status: Status) => void;
  numOfDisplayedCharacters: number;
  setNumOfDisplayedCharacters: (numOfDisplayedCharacters: number) => void;
  questionQueue: Question[];
  setQuestionQueue: (questionQueue: Question[]) => void;
  selectedModes: Mode[];
}) => {
  useEffect(() => {
    if (status === "betweenDisplayQuestion") {
      const interval = setInterval(() => {
        setNumOfDisplayedCharacters(numOfDisplayedCharacters + 1);
        setQuestionQueue(generateNextQueue(questionQueue, selectedModes));
        setStatus("displayQuestion");
      }, INTERVAL_BETWEEN_DISPLAY_QUESTION_MS);

      return () => clearInterval(interval);
    }
  }, [
    status,
    setStatus,
    numOfDisplayedCharacters,
    setNumOfDisplayedCharacters,
    questionQueue,
    setQuestionQueue,
    selectedModes,
  ]);
};
