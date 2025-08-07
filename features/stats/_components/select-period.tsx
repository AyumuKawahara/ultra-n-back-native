import { TabbarCustom } from "@/components/tabbar-custom";
import { View } from "react-native";
import { periodList } from "../_helpers/period-list";

type Props = {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
};

export const SelectPeriod = ({ selectedPeriod, setSelectedPeriod }: Props) => {
  return (
    <View className="w-[60%]">
      <TabbarCustom
        selectedItem={selectedPeriod}
        setSelectedItem={setSelectedPeriod}
        items={periodList}
      />
    </View>
  );
};
