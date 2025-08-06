import { Image, Text, View } from "react-native";

const xIcon = require("../../../assets/images/x-icon.png");
const facebookIcon = require("../../../assets/images/facebook-icon.png");
const lineIcon = require("../../../assets/images/line-icon.png");

const shareLinks = [
  {
    name: "X",
    icon: xIcon,
    url: "https://x.com/share",
    backgroundColor: "#000000",
  },
  {
    name: "Facebook",
    icon: facebookIcon,
    url: "https://www.facebook.com/share",
    backgroundColor: undefined,
  },
  {
    name: "Line",
    icon: lineIcon,
    url: "https://line.me/share",
    backgroundColor: undefined,
  },
];

export const ShareLinks = () => {
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
          <View
            key={shareLink.url}
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
        ))}
      </View>
    </View>
  );
};
