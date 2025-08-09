import { fetchDailyQuestions } from "@/services/fetch-daily-questions";
import { fetchMonthlyQuestions } from "@/services/fetch-monthly-questions";
import { fetchYearlyQuestions } from "@/services/fetch-yearly-questions";
import type { AggregatedQuestionsRow } from "@/types/aggregated-questions-row";
import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { generateInitialDatasets } from "../_helpers/generate-initial-datasets";
import { generateXLabels } from "../_helpers/generate-x-labels";
import { updateDatasets } from "../_helpers/update-datasets";
import type { Period } from "../_types/period";
import { SelectCumulate } from "./select-cumulate";
import { SelectPeriod } from "./select-period";
import { SelectYM } from "./select-ym";

const fetcher = {
  day: fetchDailyQuestions,
  month: fetchMonthlyQuestions,
  year: fetchYearlyQuestions,
} as const;

type Props = {
  selectedPeriod: Period;
  setSelectedPeriod: (period: Period) => void;
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
  const [chartRawData, setChartRawData] = useState<AggregatedQuestionsRow[]>(
    [],
  );

  useEffect(() => {
    const loadNumOfQuestionsStats = async () => {
      const data =
        await fetcher[selectedPeriod as keyof typeof fetcher](selectedYM);
      setChartRawData(data);
    };
    loadNumOfQuestionsStats();
  }, [selectedYM, selectedPeriod]);

  const xLabels = generateXLabels({ selectedPeriod, selectedYM });
  const datasets = chartRawData.length
    ? updateDatasets({ chartRawData, selectedYM, selectedPeriod })
    : generateInitialDatasets({ xLabels });

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
          decimalPlaces: 0,
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
