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
  }));

  return (
    <FlatList
      data={modeOptions}
      numColumns={2}
      renderItem={({ item }) => (
        <Button
          onPress={() => {
            setSelectedModes([...selectedModes, item.value]);
          }}
        >
          <Text>{item.label}</Text>
        </Button>
      )}
    />
  );
};
