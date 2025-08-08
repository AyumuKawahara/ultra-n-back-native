import { SelectCustom } from "@/components/select-custom";
import { generateSelectYMOptions } from "../_helpers/generate-select-ym-options";

type Props = {
  selectedPeriod: string;
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
