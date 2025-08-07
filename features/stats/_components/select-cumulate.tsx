import { Switch, Text, View } from "react-native";

type Props = {
  isCumulate: boolean;
  setIsCumulate: (isCumulate: boolean) => void;
};

export const SelectCumulate = ({ isCumulate, setIsCumulate }: Props) => {
  return (
    <View className="flex-row items-center gap-x-2">
      <Text className="text-white text-xl font-bold">累積</Text>
      <Switch
        value={isCumulate}
        onValueChange={setIsCumulate}
        trackColor={{
          true: "#1E90FF",
          false: "#1A1D21",
        }}
        thumbColor="white"
      />
    </View>
  );
};
