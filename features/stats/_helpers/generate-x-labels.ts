import { dayjsJST } from "@/lib/dayjs";
import type { Period } from "../_types/period";

type Props = {
  selectedPeriod: Period;
  selectedYM: string;
};

export const generateXLabels = ({
  selectedPeriod,
  selectedYM,
}: Props): string[] => {
  if (selectedPeriod === "day") {
    const startOfMonth = dayjsJST(`${selectedYM}-01`).startOf("month");
    const daysInMonth = startOfMonth.daysInMonth();

    return Array.from({ length: daysInMonth }, (_, idx) => {
      const day = idx + 1;
      return day % 5 === 0 ? `${day}日` : "";
    });
  }

  if (selectedPeriod === "month") {
    return [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ];
  }

  const currentYear = dayjsJST().year();
  const boundYear = 2025;

  const yearDiff = currentYear - boundYear;

  return Array.from({ length: yearDiff + 1 }, (_, idx) => {
    const year = boundYear + idx;
    return `${year}年`;
  });
};
