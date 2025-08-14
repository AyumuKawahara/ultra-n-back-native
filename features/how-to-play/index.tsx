import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";

const basicRules: string[] = [
  "Nバックは、今表示されている情報が「N個前」と一致しているかを判断するゲームです。",
  "本アプリでは「場所」「文字」の一致を判定します。該当するときだけ、対応するボタンをタップします。",
  "※ 「色」「形」の判定も追加できます。",
];

const steps: {
  label: string;
  image: any;
  caption: string | string[];
  tags?: { text: string }[];
}[] = [
  {
    label: "STEP 1",
    image: require("./_assets/scene1.png"),
    caption: "「左上」に「T」が出たことを覚えます",
  },
  {
    label: "STEP 2",
    image: require("./_assets/scene2.png"),
    caption: "「右上」に「O」が出たことを覚えます",
  },
  {
    label: "STEP 3",
    image: require("./_assets/scene3.png"),
    caption: [
      "「左上」に「T」が出たことを覚えます。",
      "2つ前と「場所」「文字」が一致しているので、両方のボタンをタップしましょう！",
    ],
    tags: [{ text: "場所一致" }, { text: "文字一致" }],
  },
  {
    label: "STEP 4",
    image: require("./_assets/scene4.png"),
    caption: [
      "「上」に「O」が出たことを覚えます。",
      "2つ前と「文字」のみが一致しているので、「文字」のボタンをタップしましょう！",
    ],
    tags: [{ text: "文字一致" }],
  },
];

export const HowToPlayPage = () => {
  return (
    <ScrollView className="bg-background h-full">
      <View className="px-4 pt-6 pb-12 gap-y-6">
        <View className="rounded-2xl px-5 py-6 gap-y-2 border border-white/10 bg-backgroundLight">
          <View className="flex-row items-center gap-x-2">
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#1E90FF"
            />
            <Text className="text-white text-lg font-bold">基本ルール</Text>
          </View>
          <View className="gap-y-2">
            {basicRules.map((rule) => (
              <Text
                key={rule}
                className="text-white"
                style={{ opacity: 0.9, fontSize: 14 }}
              >
                {rule}
              </Text>
            ))}
          </View>
        </View>

        <View className="rounded-2xl px-5 py-6 gap-y-5 border border-white/10 bg-backgroundLight">
          <View className="flex-row items-center gap-x-2">
            <Ionicons name="book" size={20} color="#A64DFF" />
            <Text className="text-white text-lg font-bold">
              例: N=2, モード=場所・文字
            </Text>
          </View>

          <View className="gap-y-4">
            {steps.map((step, idx) => (
              <View key={step.label} className="gap-y-4">
                <View className="flex-row items-start gap-x-3">
                  <View className="w-[45%]">
                    <Image
                      source={step.image}
                      style={{
                        width: "100%",
                        borderRadius: 12,
                        aspectRatio: 16 / 25,
                      }}
                      contentFit="cover"
                    />
                  </View>

                  <View className="flex-1 gap-y-2">
                    <View
                      className="self-start flex-row items-center rounded-full border px-3 py-1"
                      style={{
                        borderColor: "rgba(255,255,255,0.2)",
                        backgroundColor: "rgba(255,255,255,0.06)",
                      }}
                    >
                      <Text className="text-white text-xs font-bold">
                        {step.label}
                      </Text>
                    </View>

                    <View>
                      {(Array.isArray(step.caption)
                        ? step.caption
                        : [step.caption]
                      ).map((line, i) => (
                        <Text
                          key={`${step.label}-caption-${i}`}
                          className="text-white"
                          style={{ opacity: 0.9, fontSize: 14 }}
                        >
                          {line}
                        </Text>
                      ))}
                    </View>

                    {step.tags && step.tags.length > 0 && (
                      <View className="flex-row flex-wrap items-center gap-x-2 gap-y-2">
                        {step.tags.map((tag) => (
                          <View
                            key={`${step.label}-${tag.text}`}
                            className="flex-row items-center rounded-full border px-2 py-0.5"
                            style={{
                              backgroundColor: "rgba(30,144,255,0.12)",
                              borderColor: "#1E90FF",
                            }}
                          >
                            <Text
                              className="text-xs font-bold"
                              style={{ color: "#1E90FF" }}
                            >
                              {tag.text}
                            </Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                </View>

                {idx < steps.length - 1 && (
                  <View className="h-[1px] bg-white/10" />
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
