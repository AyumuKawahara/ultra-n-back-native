import { modeLabelMap } from "@/helpers/mode-label-map";
import type { Mode } from "@/types/mode";
import { FlatList, Text } from "react-native";
import { Button } from "tamagui";

type Props = {
  selectedModes: Mode[];
  setSelectedModes: (modes: Mode[]) => void;
};

export const SelectMode = ({ selectedModes, setSelectedModes }: Props) => {
  const modeOptions = Object.entries(modeLabelMap).map(([key, value]) => ({
    value: key as Mode,
    label: value.label,
    required: value.required,
  }));

  return (
    <FlatList
      data={modeOptions}
      numColumns={2}
      columnWrapperClassName="gap-x-2"
      contentContainerClassName="gap-y-2"
      renderItem={({ item }) => {
        const isSelected = selectedModes.includes(item.value);

        return (
          <Button
            onPress={() => {
              if (isSelected) {
                if (!item.required) {
                  setSelectedModes(
                    selectedModes.filter((mode) => mode !== item.value),
                  );
                }
              } else {
                setSelectedModes([...selectedModes, item.value]);
              }
            }}
            flex={1}
            style={{
              backgroundColor: isSelected ? "blue" : "white",
            }}
          >
            <Text style={{ color: isSelected ? "white" : "black" }}>
              {item.label}
            </Text>
          </Button>
        );
      }}
    />
  );
};
