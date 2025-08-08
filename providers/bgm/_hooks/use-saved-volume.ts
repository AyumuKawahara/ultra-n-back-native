import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { VOLUME_STORAGE_KEY } from "../_const/storage-key";

type Props = {
  volumeState: number;
  setVolumeState: (volume: number) => void;
};

export const useSavedVolume = ({ volumeState, setVolumeState }: Props) => {
  useEffect(() => {
    const setStoredVolume = async () => {
      const savedVolume = await AsyncStorage.getItem(VOLUME_STORAGE_KEY);
      if (savedVolume != null)
        setVolumeState(Math.min(1, Math.max(0, Number(savedVolume))));
    };

    setStoredVolume().catch(() => {});
  }, [setVolumeState]);

  useEffect(() => {
    AsyncStorage.setItem(VOLUME_STORAGE_KEY, String(volumeState)).catch(
      () => {},
    );
  }, [volumeState]);
};
