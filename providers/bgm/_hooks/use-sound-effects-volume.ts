import { useCallback, useState } from "react";
import { SOUND_EFFECTS_VOLUME_STORAGE_KEY } from "../_const/storage-key";
import { useSavedVolume } from "./use-saved-volume";

export const useSoundEffectsVolume = () => {
  const [soundEffectsVolumeState, setSoundEffectsVolumeState] =
    useState<number>(0.6);

  useSavedVolume({
    volumeState: soundEffectsVolumeState,
    setVolumeState: setSoundEffectsVolumeState,
    storageKey: SOUND_EFFECTS_VOLUME_STORAGE_KEY,
  });

  const setSoundEffectsVolume = useCallback((v: number) => {
    setSoundEffectsVolumeState(Math.min(1, Math.max(0, v)));
  }, []);

  return {
    soundEffectsVolume: soundEffectsVolumeState,
    setSoundEffectsVolume,
  } as const;
};
