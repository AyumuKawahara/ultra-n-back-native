import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

type Props = {
  volumeState: number;
  setVolumeState: (volume: number) => void;
  storageKey: string;
};

export const useSavedVolume = ({
  volumeState,
  setVolumeState,
  storageKey,
}: Props) => {
  useEffect(() => {
    const setStoredVolume = async () => {
      const savedVolume = await AsyncStorage.getItem(storageKey);
      if (savedVolume != null)
        setVolumeState(Math.min(1, Math.max(0, Number(savedVolume))));
    };

    setStoredVolume().catch(() => {});
  }, [setVolumeState, storageKey]);

  useEffect(() => {
    AsyncStorage.setItem(storageKey, String(volumeState)).catch(() => {});
  }, [volumeState, storageKey]);
};
