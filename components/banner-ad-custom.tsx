import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import { useEffect } from "react";
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
    (async () => {
      try {
        await requestTrackingPermissionsAsync();
      } catch {}
    })();
  }, []);

  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      onAdFailedToLoad={(e) => console.log("Ad load error:", e)}
    />
  );
};
