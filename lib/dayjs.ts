import dayjs from "dayjs";
import "dayjs/locale/ja";
import duration from "dayjs/plugin/duration";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);
dayjs.extend(duration);
dayjs.locale("ja");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.tz.setDefault("Asia/Tokyo");

export const dayjsJST = (
  configType?: dayjs.ConfigType,
  optionType?: dayjs.OptionType,
  strict?: boolean,
) => dayjs(configType, optionType, strict).tz("Asia/Tokyo");
