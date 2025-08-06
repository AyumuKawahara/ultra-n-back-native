import { modeLabelMap } from "@/helpers/mode-label-map";
import type { Mode } from "@/types/mode";
import { FlatList, Text, TouchableHighlight } from "react-native";

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
      columnWrapperClassName="gap-x-3"
      contentContainerClassName="gap-y-3"
      renderItem={({ item }) => {
        const isSelected = selectedModes.includes(item.value);

        return (
          <TouchableHighlight
            className="border py-7 flex-1 rounded-xl justify-center items-center"
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
            style={{
              borderColor: "#1E90FF",
              backgroundColor: isSelected ? "#1E90FF" : "#2F3338",
              opacity: isSelected ? 1 : 0.8,
            }}
          >
            <Text
              className="font-bold text-xl"
              style={{ color: isSelected ? "white" : "#1E90FF" }}
            >
              {item.label}
            </Text>
          </TouchableHighlight>
        );
      }}
    />
  );
};
