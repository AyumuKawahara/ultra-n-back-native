import type { Mode } from "@/types/mode";
import { useEffect } from "react";
import { generateQuestion } from "../_helpers/generate-question";
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
  currentQuestion,
  setCurrentQuestion,
  historyQueue,
  setHistoryQueue,
  selectedModes,
}: {
  status: Status;
  setStatus: (status: Status) => void;
  numOfDisplayedCharacters: number;
  setNumOfDisplayedCharacters: (numOfDisplayedCharacters: number) => void;
  currentQuestion: Question;
  setCurrentQuestion: (currentQuestion: Question) => void;
  historyQueue: Question[];
  setHistoryQueue: (historyQueue: Question[]) => void;
  selectedModes: Mode[];
}) => {
  useEffect(() => {
    if (status === "betweenDisplayQuestion") {
      const interval = setInterval(() => {
        setNumOfDisplayedCharacters(numOfDisplayedCharacters + 1);
        setCurrentQuestion(generateQuestion(selectedModes));
        setHistoryQueue([...historyQueue, currentQuestion]);
        setStatus("displayQuestion");
      }, INTERVAL_BETWEEN_DISPLAY_QUESTION_MS);

      return () => clearInterval(interval);
    }
  }, [
    status,
    setStatus,
    numOfDisplayedCharacters,
    setNumOfDisplayedCharacters,
    currentQuestion,
    setCurrentQuestion,
    historyQueue,
    setHistoryQueue,
    selectedModes,
  ]);
};
