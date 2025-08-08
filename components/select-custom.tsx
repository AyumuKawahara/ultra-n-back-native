import type { SelectItem } from "@/types/select";
import { useRef, useState } from "react";
import {
  Animated,
  Easing,
  FlatList,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";

type Props = {
  items: SelectItem[];
  value: string;
  setValue: (value: string) => void;
};

export const SelectCustom = ({ items, value, setValue }: Props) => {
  const translateY = useRef(new Animated.Value(600)).current;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    translateY.setValue(600);
    setIsOpen(true);
    requestAnimationFrame(() => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    });
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: 600,
      duration: 200,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) setIsOpen(false);
    });
  };

  return (
    <>
      <Pressable
        onPress={openModal}
        className="border border-white/20 rounded-lg px-3 py-3 bg-white/5"
      >
        <Text className="text-white text-base">{value}</Text>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="none"
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-end">
          {/* 背景オーバーレイ（即時表示） */}
          <Pressable
            onPress={closeModal}
            className="absolute inset-0 bg-black/40"
          />

          {/* ボトムシート本体（のみスライド表示） */}
          <Animated.View
            className="bg-[#1F2328] p-4 pt-3 rounded-t-2xl"
            style={{ paddingBottom: 24, transform: [{ translateY }] }}
          >
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-white text-lg font-semibold">
                年月を選択
              </Text>
              <Pressable onPress={closeModal}>
                <Text className="text-white/80 text-base">閉じる</Text>
              </Pressable>
            </View>

            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              style={{ maxHeight: 360 }}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    setValue(item.id);
                    closeModal();
                  }}
                  className="py-3 px-2 rounded-lg flex-row items-center justify-between"
                >
                  <Text className="text-white text-base">{item.label}</Text>
                  {item.id === value && (
                    <Text className="text-vividBlue text-sm">選択中</Text>
                  )}
                </Pressable>
              )}
              ItemSeparatorComponent={() => (
                <View className="h-[1px] bg-white/10" />
              )}
            />
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};
