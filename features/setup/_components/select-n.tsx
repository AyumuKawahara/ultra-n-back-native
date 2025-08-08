import { SelectCustom } from "@/components/select-custom";

type Props = {
  n: number;
  setN: (n: number) => void;
};

export const SelectN = ({ n, setN }: Props) => {
  const options = Array.from({ length: 60 }, (_, i) => ({
    id: `${i + 1}`,
    label: `${i + 1}`,
  }));

  return (
    <SelectCustom
      items={options}
      value={n.toString()}
      setValue={(value) => setN(Number(value))}
      selectTriggerStyle={{
        paddingVertical: 16,
      }}
    />
  );
};
