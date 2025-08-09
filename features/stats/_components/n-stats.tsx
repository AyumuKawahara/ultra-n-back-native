import { View } from "react-native";
import type { Period } from "../_types/period";
import { SelectPeriod } from "./select-period";

type Props = {
  selectedPeriod: Period;
  setSelectedPeriod: (period: Period) => void;
};

export const NStats = ({ selectedPeriod, setSelectedPeriod }: Props) => {
  return (
    <View className="gap-y-6">
      <SelectPeriod
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
    </View>
  );
};
