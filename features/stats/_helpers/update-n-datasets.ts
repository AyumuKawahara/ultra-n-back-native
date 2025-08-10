import { dayjsJST } from "@/lib/dayjs";
import type { Achievement } from "@/types/achievement";
import dayjs, { type Dayjs } from "dayjs";
import type { Period } from "../_types/period";

export const updateNDatasets = (
  achievements: Achievement[],
  selectedPeriod: Period,
  selectedYM: string,
): number[] => {
  const filteredAchievements = (() => {
    if (!achievements.length) return [];

    const filteredReversingAchievements = achievements.filter((achievement) => {
      for (const comparison of achievements) {
        if (
          achievement.n > comparison.n &&
          dayjsJST(achievement.createdAt).isAfter(
            dayjsJST(comparison.createdAt),
          )
        ) {
          return false;
        }
      }
      return true;
    });

    return filteredReversingAchievements;
  })();

  const getMaxNAchievedBefore = (upperBoundDate: Dayjs): number => {
    if (filteredAchievements.length === 0) return 0;

    let maxN = 0;
    for (const achievement of filteredAchievements) {
      if (dayjsJST(achievement.createdAt).isBefore(upperBoundDate)) {
        maxN = achievement.n;
      }
    }
    return maxN;
  };

  if (selectedPeriod === "day") {
    const startOfMonth = dayjs(`${selectedYM}-01`)
      .tz("Asia/Tokyo", true)
      .startOf("month");
    const daysInMonth = startOfMonth.daysInMonth();

    return Array.from({ length: daysInMonth }, (_, idx) => {
      const nextDayStart = startOfMonth.add(idx + 1, "day");
      return getMaxNAchievedBefore(nextDayStart);
    });
  }

  if (selectedPeriod === "month") {
    return Array.from({ length: 12 }, (_, idx) => {
      const month = idx + 1;
      const ym = `${selectedYM}-${String(month).padStart(2, "0")}`;
      const nextMonthStart = dayjs(`${ym}-01`)
        .tz("Asia/Tokyo", true)
        .add(1, "month")
        .startOf("month");
      return getMaxNAchievedBefore(nextMonthStart);
    });
  }

  const currentYear = dayjsJST().year();
  const boundYear = 2024;
  const yearDiff = currentYear - boundYear;

  return Array.from({ length: yearDiff + 1 }, (_, idx) => {
    const year = boundYear + idx;
    const nextYearStart = dayjs(`${year}-01-01`)
      .tz("Asia/Tokyo", true)
      .add(1, "year")
      .startOf("year");
    return getMaxNAchievedBefore(nextYearStart);
  });
};
