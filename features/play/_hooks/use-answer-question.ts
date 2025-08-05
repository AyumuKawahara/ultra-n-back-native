import type { Mode } from "@/types/mode";
import { useEffect } from "react";
import { judgeIsCorrectAnswer } from "../_helpers/judge-is-correct-answer";
import type { Answer } from "../_types/answer";
import type { Question } from "../_types/question";
import type { Status } from "../_types/status";

export const INTERVAL_ANSWER_QUESTION_MS = 1000;

type Props = {
  status: Status;
  setStatus: (status: Status) => void;
  answer: Answer;
  setAnswer: (answer: Answer) => void;
  questionQueue: Question[];
  setIsCorrectAnswer: (isCorrectAnswer: Answer) => void;
  numOfCorrectAnswers: number;
  setNumOfCorrectAnswers: (numOfCorrectAnswers: number) => void;
  selectedModes: Mode[];
};

export const useAnswerQuestion = ({
  status,
  setStatus,
  answer,
  setAnswer,
  questionQueue,
  setIsCorrectAnswer,
  numOfCorrectAnswers,
  setNumOfCorrectAnswers,
  selectedModes,
}: Props) => {
  useEffect(() => {
    if (status === "answerQuestion") {
      const interval = setInterval(() => {
        setAnswer({
          place: false,
          character: false,
          color: false,
          shape: false,
        });
        judgeIsCorrectAnswer(
          answer,
          questionQueue,
          setIsCorrectAnswer,
          numOfCorrectAnswers,
          setNumOfCorrectAnswers,
          selectedModes,
        );
        setStatus("displayAnswer");
      }, INTERVAL_ANSWER_QUESTION_MS);

      return () => clearInterval(interval);
    }
  }, [
    status,
    setStatus,
    setAnswer,
    setIsCorrectAnswer,
    questionQueue,
    answer,
    numOfCorrectAnswers,
    setNumOfCorrectAnswers,
    selectedModes,
  ]);
};
