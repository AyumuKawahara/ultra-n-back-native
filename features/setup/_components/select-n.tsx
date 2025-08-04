import { SelectCustom } from "@/components/select-custom";

type Props = {
  n: number;
  setN: (n: number) => void;
};

export const SelectN = ({ n, setN }: Props) => {
  const options = [
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
    { id: "4", label: "4" },
    { id: "5", label: "5" },
  ];

  return (
    <SelectCustom
      items={options}
      value={n.toString()}
      onChange={(value) => setN(Number(value))}
    />
  );
};
