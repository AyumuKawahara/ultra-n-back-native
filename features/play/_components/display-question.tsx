import { FlatList, Text, View } from "react-native";

export const DisplayQuestion = () => {
  const numbers = Array.from({ length: 9 }, (_, i) => i);

  return (
    <FlatList
      data={numbers}
      numColumns={3}
      columnWrapperClassName="flex gap-x-0.5"
      contentContainerClassName="gap-y-0.5"
      renderItem={({ item }) => (
        <View className="flex-1 aspect-square flex items-center justify-center text-white border">
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};
