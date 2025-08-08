import { View } from "react-native";
import { SelectPeriod } from "./select-period";

type Props = {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
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
