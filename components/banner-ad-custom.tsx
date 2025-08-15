import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy";

const BANNER_WIDTH = 320;
const BANNER_HEIGHT = 50;

export const BannerAdCustom = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View
      style={{
        width: BANNER_WIDTH,
        height: BANNER_HEIGHT,
        alignSelf: "center",
      }}
      className="items-center justify-center"
    >
      {!isLoaded && (
        <View
          pointerEvents="none"
          style={{ width: BANNER_WIDTH, height: BANNER_HEIGHT }}
          className="absolute items-center justify-center"
        >
          <View
            style={{ width: BANNER_WIDTH, height: BANNER_HEIGHT }}
            className="bg-neutral-200 dark:bg-neutral-800"
          />
          <ActivityIndicator size="small" className="absolute" />
        </View>
      )}
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        onAdLoaded={() => setIsLoaded(true)}
        onAdFailedToLoad={(e) => {
          setIsLoaded(false);
          console.log("Ad load error:", e);
        }}
      />
    </View>
  );
};
