import { TabbarCustom } from "@/components/tabbar-custom";
import { View } from "react-native";
import { periodList } from "../_helpers/period-list";
import type { Period } from "../_types/period";

type Props = {
  selectedPeriod: Period;
  setSelectedPeriod: (period: Period) => void;
};

export const SelectPeriod = ({ selectedPeriod, setSelectedPeriod }: Props) => {
  return (
    <View className="w-[60%]">
      <TabbarCustom
        selectedItem={selectedPeriod}
        setSelectedItem={(item) => setSelectedPeriod(item as Period)}
        items={periodList}
      />
    </View>
  );
};
