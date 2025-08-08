import { dayjsJST } from "@/lib/dayjs";
import type { SelectItem } from "@/types/select";
import dayjs from "dayjs";

type Props = {
  selectedPeriod: string;
};

export const generateSelectYMOptions = ({
  selectedPeriod,
}: Props): SelectItem[] => {
  const todayJst = dayjsJST();

  if (selectedPeriod === "day") {
    const boundMonth = dayjs("2025-08-01")
      .tz("Asia/Tokyo", true)
      .startOf("month");
    const currentMonth = todayJst.startOf("month");
    const monthDiff = currentMonth.diff(boundMonth, "month");

    return Array.from({ length: monthDiff + 1 }).map((_, idx) => {
      const d = currentMonth.subtract(idx, "month");
      return { id: d.format("YYYY-MM"), label: d.format("YYYY年M月") };
    });
  }

  if (selectedPeriod === "month") {
    const currentYear = todayJst.year();
    const yearDiff = currentYear - 2025;
    return Array.from({ length: yearDiff + 1 }).map((_, idx) => {
      const year = currentYear - idx;
      return { id: String(year), label: `${year}年` };
    });
  }

  return [];
};
