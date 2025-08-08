import { useEffect, useMemo } from "react";
import { useBgm } from "./use-bgm";

export const useBgmTemporaryMute = (key?: string) => {
  const { pushTemporaryMute, popTemporaryMute } = useBgm();
  const id = useMemo(
    () => key ?? `page-mute-${Math.random().toString(36).slice(2)}`,
    [key],
  );
  useEffect(() => {
    pushTemporaryMute(id);
    return () => popTemporaryMute(id);
  }, [id, pushTemporaryMute, popTemporaryMute]);
};
