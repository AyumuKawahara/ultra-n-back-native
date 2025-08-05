import { useEffect } from "react";
import type { Status } from "../_types/status";

const INTERVAL_ANSWER_QUESTION_MS = 1000;

type Props = {
  status: Status;
};

export const useAnswerQuestion = ({ status }: Props) => {
  useEffect(() => {
    if (status === "answerQuestion") {
      const interval = setInterval(() => {}, INTERVAL_ANSWER_QUESTION_MS);

      return () => clearInterval(interval);
    }
  }, [status]);
};
