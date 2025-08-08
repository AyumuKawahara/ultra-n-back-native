import { SelectCustom } from "@/components/select-custom";
import { dayjsJST } from "@/lib/dayjs";
import { useMemo } from "react";

type Props = {
  selectedYM: string; // "YYYY-MM"
  setSelectedYM: (ym: string) => void;
};

export const SelectYM = ({ selectedYM, setSelectedYM }: Props) => {
  const monthOptions = useMemo(() => {
    // 過去24ヶ月分を生成（今月含む）
    const now = dayjsJST();
    return Array.from({ length: 24 }).map((_, idx) => {
      const d = now.subtract(idx, "month");
      const value = d.format("YYYY-MM");
      const label = d.format("YYYY年M月");
      return { id: value, label } as const;
    });
  }, []);

  return (
    <SelectCustom
      items={monthOptions}
      value={selectedYM}
      setValue={setSelectedYM}
    />
  );
};
