import { SelectCustom } from "@/components/select-custom";
import { generateSelectYMOptions } from "../_helpers/generate-select-ym-options";
import type { Period } from "../_types/period";

type Props = {
  selectedPeriod: Period;
  selectedYM: string;
  setSelectedYM: (ym: string) => void;
};

export const SelectYM = ({
  selectedPeriod,
  selectedYM,
  setSelectedYM,
}: Props) => {
  return (
    <SelectCustom
      items={generateSelectYMOptions({ selectedPeriod })}
      value={selectedYM}
      setValue={setSelectedYM}
      selectTriggerStyle={{
        paddingVertical: 10,
      }}
    />
  );
};
