import { useEffect } from "react";
import type { Status } from "../_types/status";

const INTERVAL_CHECK_ANSWER_MS = 1000;

type Props = {
  status: Status;
};

export const useCheckAnswer = ({ status }: Props) => {
  useEffect(() => {
    if (status === "displayAnswer") {
      const interval = setInterval(() => {}, INTERVAL_CHECK_ANSWER_MS);

      return () => clearInterval(interval);
    }
  }, [status]);
};
