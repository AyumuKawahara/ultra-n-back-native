import { useEffect } from "react";
import type { Status } from "../_types/status";

const INTERVAL_DISPLAY_QUESTION_MS = 1000;

type Props = {
  setStatus: (status: Status) => void;
  status: Status;
  numOfDisplayedCharacters: number;
  n: number;
};

export const useDisplayQuestion = ({
  setStatus,
  status,
  numOfDisplayedCharacters,
  n,
}: Props) => {
  const canAnswer = numOfDisplayedCharacters > n;

  useEffect(() => {
    if (status === "displayQuestion") {
      const interval = setInterval(() => {
        setStatus(canAnswer ? "answerQuestion" : "betweenDisplayQuestion");
      }, INTERVAL_DISPLAY_QUESTION_MS);

      return () => clearInterval(interval);
    }
  }, [status, setStatus, canAnswer]);
};
