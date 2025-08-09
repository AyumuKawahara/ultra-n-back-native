import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

type Props = {
  xLabels: string[];
  datasets: number[];
};

export const LineChartCustom = ({ xLabels, datasets }: Props) => {
  return (
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
      width={Dimensions.get("window").width - 4}
      height={400}
      yAxisInterval={1}
      fromZero={true}
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
        transform: [{ translateX: -24 }],
        marginTop: 16,
      }}
      bezier
    />
  );
};
