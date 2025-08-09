import type { AggregatedQuestionsRow } from "@/types/aggregated-questions-row";
import { useState } from "react";
import { View } from "react-native";
import type { Period } from "../_types/period";
import { LineChartCustom } from "./line-chart-custom";
import { SelectPeriod } from "./select-period";
import { SelectYM } from "./select-ym";

type Props = {
  selectedPeriod: Period;
  setSelectedPeriod: (period: Period) => void;
  selectedYM: string;
  setSelectedYM: (ym: string) => void;
};

export const NStats = ({
  selectedPeriod,
  setSelectedPeriod,
  selectedYM,
  setSelectedYM,
}: Props) => {
  const [chartRawData, setChartRawData] = useState<AggregatedQuestionsRow[]>(
    [],
  );

  return (
    <View className="gap-y-6">
      <SelectPeriod
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      {["day", "month"].includes(selectedPeriod) && (
        <View className="w-[50%]">
          <SelectYM
            selectedPeriod={selectedPeriod}
            selectedYM={selectedYM}
            setSelectedYM={setSelectedYM}
          />
        </View>
      )}
      <LineChartCustom xLabels={["1", "2", "3"]} datasets={[1, 2, 5]} />
    </View>
  );
};
