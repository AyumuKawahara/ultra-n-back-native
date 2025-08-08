import type { SelectItem } from "@/types/select";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  items: SelectItem[];
};

export const TabbarCustom = ({
  selectedItem,
  setSelectedItem,
  items,
}: Props) => {
  return (
    <View className="flex-row border rounded-lg border-white overflow-hidden">
      {items.map((item) => {
        const isSelected = selectedItem === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            className="flex-1 py-2 border-x border-white"
            style={{
              backgroundColor: isSelected ? "white" : undefined,
            }}
            onPress={() => setSelectedItem(item.id)}
          >
            <Text
              className="text-center text-xl"
              style={{ color: isSelected ? "black" : "white" }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
