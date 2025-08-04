import { FlatList, Text, View } from "react-native";

export const DisplayQuestion = () => {
  const numbers = Array.from({ length: 9 }, (_, i) => i);

  return (
    <FlatList
      data={numbers}
      numColumns={3}
      renderItem={({ item }) => (
        <View className="">
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};
