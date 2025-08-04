import { modeLabelMap } from "@/helpers/mode-label-map";
import type { Mode } from "@/types/mode";
import { FlatList, Text } from "react-native";
import { Button } from "tamagui";

type Props = {
  selectedModes: Mode[];
};

export const AnswerQuestion = ({ selectedModes }: Props) => {
  const selectedModeObjects = selectedModes.map((mode) => modeLabelMap[mode]);

  return (
    <FlatList
      data={selectedModeObjects}
      numColumns={2}
      renderItem={({ item }) => (
        <Button>
          <Text>{item.label}</Text>
        </Button>
      )}
    />
  );
};
