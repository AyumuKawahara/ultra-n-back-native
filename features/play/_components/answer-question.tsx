import { modeLabelMap } from "@/helpers/mode-label-map";
import type { Mode } from "@/types/mode";
import { FlatList, Text, View } from "react-native";
import { Button } from "tamagui";

type Props = {
  selectedModes: Mode[];
};

export const AnswerQuestion = ({ selectedModes }: Props) => {
  const modeOptions = Object.entries(modeLabelMap).map(([key, value]) => ({
    value: key as Mode,
    label: value.label,
  }));

  return (
    <FlatList
      data={modeOptions}
      numColumns={2}
      columnWrapperClassName="gap-x-2"
      contentContainerClassName="gap-y-2"
      renderItem={({ item }) => {
        const isSelected = selectedModes.includes(item.value);

        if (!isSelected) return <View className="flex-1" />;

        return (
          <View className="flex-1">
            <Button style={{ backgroundColor: "white" }}>
              <Text>{item.label}</Text>
            </Button>
          </View>
        );
      }}
    />
  );
};
