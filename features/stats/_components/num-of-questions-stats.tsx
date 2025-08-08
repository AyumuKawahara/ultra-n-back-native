import { playRecords } from "@/db/schema";
import { db } from "@/features/root";
import type { PlayRecord } from "@/types/play-record";
import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { generateInitialDatasets } from "../_helpers/generate-initial-datasets";
import { generateXLabels } from "../_helpers/generate-x-labels";
import { SelectCumulate } from "./select-cumulate";
import { SelectPeriod } from "./select-period";
import { SelectYM } from "./select-ym";

type Props = {
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
  selectedYM: string;
  setSelectedYM: (ym: string) => void;
};

export const NumOfQuestionsStats = ({
  selectedPeriod,
  setSelectedPeriod,
  selectedYM,
  setSelectedYM,
}: Props) => {
  const [isCumulate, setIsCumulate] = useState(false);
  const [chartRawData, setChartRawData] = useState<PlayRecord[]>([]);

  useEffect(() => {
    const loadNumOfQuestionsStats = async () => {
      const data = await db.select().from(playRecords);
      setChartRawData(data);
    };
    loadNumOfQuestionsStats();
  }, []);

  const xLabels = generateXLabels({ selectedPeriod, selectedYM });
  const datasets = generateInitialDatasets({ xLabels });

  return (
    <View className="gap-y-6">
      <View className="flex-row justify-between items-center">
        <SelectPeriod
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
        <SelectCumulate isCumulate={isCumulate} setIsCumulate={setIsCumulate} />
      </View>
      {["day", "month"].includes(selectedPeriod) && (
        <View className="w-[50%]">
          <SelectYM
            selectedPeriod={selectedPeriod}
            selectedYM={selectedYM}
            setSelectedYM={setSelectedYM}
          />
        </View>
      )}
      <LineChart
        data={{
          labels: xLabels,
          datasets: [
            {
              data: datasets,
            },
          ],
        }}
        formatXLabel={(label) => {
          if (label === "January") {
            return "1月";
          }
          return label;
        }}
        width={Dimensions.get("window").width - 16}
        height={400}
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: "#25292E",
          backgroundGradientTo: "#25292E",
          color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "2",
            strokeWidth: "1",
            stroke: "white",
          },
        }}
        style={{
          transform: [{ translateX: -16 }],
          marginTop: 16,
        }}
        bezier
      />
    </View>
  );
};
