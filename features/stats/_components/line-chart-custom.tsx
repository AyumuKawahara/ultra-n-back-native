import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

type Props = {
  xLabels: string[];
  datasets: number[];
};

export const LineChartCustom = ({ xLabels, datasets }: Props) => {
  const accentColor = "#1E90FF";
  const lineColor = "rgba(30,144,255,0.6)";

  const data = datasets.map((value) => ({ value }));

  const sections = 3;
  const rawMax = Math.max(0, ...datasets);
  const stepValue = Math.max(1, Math.ceil(rawMax / sections));
  const adjustedMax = stepValue * sections;
  const yAxisLabelTexts = Array.from({ length: sections + 1 }, (_, i) =>
    String(i * stepValue),
  );

  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="rounded-xl py-4 gap-y-4 border border-white/10 bg-backgroundLight">
      <LineChart
        data={data}
        noOfSections={sections}
        height={260}
        maxValue={adjustedMax}
        yAxisLabelTexts={yAxisLabelTexts}
        yAxisTextStyle={{ color: "#9CA3AF", fontSize: 10 }}
        xAxisLabelTextStyle={{
          color: "#FFFFFF",
          fontSize: 10,
        }}
        dataPointsRadius1={3}
        xAxisLabelsHeight={18}
        xAxisLabelTexts={xLabels}
        color={lineColor}
        adjustToWidth
        thickness={3}
        width={screenWidth - 80}
        initialSpacing={14}
        disableScroll
        rulesColor="rgba(255,255,255,0.2)"
        xAxisThickness={1}
        xAxisColor="rgba(255,255,255,0.2)"
        yAxisThickness={0}
        dataPointsColor={accentColor}
      />
    </View>
  );
};
