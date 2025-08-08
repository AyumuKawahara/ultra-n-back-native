import { createContext } from "react";

export type BgmContextValue = {
  volume: number;
  setVolume: (v: number) => void;
  pushTemporaryMute: (id: string) => void;
  popTemporaryMute: (id: string) => void;
  isTemporarilyMuted: boolean;
};

export const BgmContext = createContext<BgmContextValue | undefined>(undefined);
