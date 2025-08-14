import { useEffect } from "react";
import { View } from "react-native";
import mobileAds, {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy";

export const BannerAdCustom = () => {
  useEffect(() => {
    mobileAds().initialize();
  }, []);

  return (
    <View className="items-center">
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        onAdFailedToLoad={(e) => console.log("Ad load error:", e)}
      />
    </View>
  );
};
