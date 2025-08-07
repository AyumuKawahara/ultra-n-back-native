import { useState } from "react";
import { View } from "react-native";
import { SelectCumulate } from "./select-cumulate";
import { SelectPeriod } from "./select-period";

type Props = {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
};

export const NumOfQuestionsStats = ({
  selectedPeriod,
  setSelectedPeriod,
}: Props) => {
  const [isCumulate, setIsCumulate] = useState(false);

  return (
    <View>
      <View className="flex-row justify-between items-center">
        <SelectPeriod
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
        <SelectCumulate isCumulate={isCumulate} setIsCumulate={setIsCumulate} />
      </View>
    </View>
  );
};
