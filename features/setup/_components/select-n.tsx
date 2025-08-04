import { SelectCustom } from "@/components/select-custom";

export const SelectN = () => {
  const n = [
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
    { id: "4", label: "4" },
    { id: "5", label: "5" },
  ];

  return <SelectCustom items={n} />;
};
