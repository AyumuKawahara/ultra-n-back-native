import { dayjsJST } from "@/lib/dayjs";
import type { AggregatedQuestionsRow } from "@/types/aggregated-questions-row";
import type { Period } from "../_types/period";

type Props = {
  chartRawData: AggregatedQuestionsRow[];
  selectedPeriod: Period;
  selectedYM: string;
};

export const updateDatasets = ({
  chartRawData,
  selectedYM,
  selectedPeriod,
}: Props): number[] => {
  if (selectedPeriod === "day") {
    const startOfMonth = dayjsJST(`${selectedYM}-01`).startOf("month");
    const daysInMonth = startOfMonth.daysInMonth();

    const totalByDate = new Map<string, number>(
      chartRawData.map((row) => [row.label, row.total]),
    );

    return Array.from({ length: daysInMonth }, (_, idx) => {
      const day = idx + 1;
      const label = `${selectedYM}-${String(day).padStart(2, "0")}`;
      return totalByDate.get(label) ?? 0;
    });
  }

  if (selectedPeriod === "month") {
    const year = selectedYM;

    const totalByMonth = new Map<string, number>(
      chartRawData.map((row) => [row.label, row.total]),
    );

    return Array.from({ length: 12 }, (_, idx) => {
      const month = idx + 1;
      const label = `${year}-${String(month).padStart(2, "0")}`;
      return totalByMonth.get(label) ?? 0;
    });
  }

  const currentYear = dayjsJST().year();
  const boundYear = 2025;
  const yearDiff = currentYear - boundYear;

  const totalByYear = new Map<string, number>(
    chartRawData.map((row) => [row.label, row.total]),
  );

  return Array.from({ length: yearDiff + 1 }, (_, idx) => {
    const year = String(boundYear + idx);
    return totalByYear.get(year) ?? 0;
  });
};
