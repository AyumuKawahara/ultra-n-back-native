import * as Linking from "expo-linking";
import { Image, Pressable, Text, View } from "react-native";

const xIcon = require("../../../assets/images/x-icon.png");
const facebookIcon = require("../../../assets/images/facebook-icon.png");
const lineIcon = require("../../../assets/images/line-icon.png");

interface ShareLinksProps {
  rate: number;
  n: number;
  numOfCorrectAnswers: number;
  numOfQuestions: number;
  selectedModes: string[];
}

const shareLinks = [
  {
    name: "X",
    icon: xIcon,
    backgroundColor: "#000000",
  },
  {
    name: "Facebook",
    icon: facebookIcon,
    backgroundColor: undefined,
  },
  {
    name: "Line",
    icon: lineIcon,
    backgroundColor: undefined,
  },
];

export const ShareLinks = ({
  rate,
  n,
  numOfCorrectAnswers,
  numOfQuestions,
  selectedModes,
}: ShareLinksProps) => {
  const generateShareText = () => {
    const modeLabels = selectedModes
      .map((mode) => {
        const modeMap: Record<string, string> = {
          place: "位置",
          character: "文字",
          color: "色",
          shape: "形",
        };
        return modeMap[mode] || mode;
      })
      .join("・");

    return `Ultra N Backで${n}バックの${modeLabels}モードをプレイ！正解率${rate.toFixed(1)}%（${numOfCorrectAnswers}/${numOfQuestions}問正解）でした！🧠✨`;
  };

  const handleShare = async (platform: string) => {
    const shareText = generateShareText();

    try {
      let url: string;

      switch (platform) {
        case "X":
          url = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
          break;
        case "Facebook":
          url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://example.com")}&quote=${encodeURIComponent(shareText)}`;
          break;
        case "Line":
          url = `https://line.me/R/msg/text/?${encodeURIComponent(shareText)}`;
          break;
        default:
          return;
      }

      await Linking.openURL(url);
    } catch (error) {
      console.error("シェアリンクを開けませんでした:", error);
    }
  };

  return (
    <View className="gap-y-2">
      <Text className="text-white text-2xl font-bold">結果をシェアする</Text>
      <View
        className="border border-dashed rounded-2xl flex-row gap-x-20 items-center justify-center py-4"
        style={{
          borderColor: "#1E90FF",
        }}
      >
        {shareLinks.map((shareLink) => (
          <Pressable
            key={shareLink.name}
            onPress={() => handleShare(shareLink.name)}
            style={({ pressed }) => [
              {
                transform: [{ scale: pressed ? 0.95 : 1 }],
              },
            ]}
          >
            <View
              className="w-12 h-12 rounded-md items-center justify-center"
              style={{
                backgroundColor: shareLink.backgroundColor,
              }}
            >
              <Image
                source={shareLink.icon}
                style={{
                  width: shareLink.name === "X" ? 32 : 44,
                  height: shareLink.name === "X" ? 32 : 44,
                }}
              />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
