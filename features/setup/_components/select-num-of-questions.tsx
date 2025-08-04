import { SelectCustom } from "@/components/select-custom";

type Props = {
  numOfQuestions: number;
  setNumOfQuestions: (numOfQuestions: number) => void;
};

export const SelectNumOfQuestions = ({
  numOfQuestions,
  setNumOfQuestions,
}: Props) => {
  const options = [
    { id: "5", label: "5" },
    { id: "10", label: "10" },
    { id: "15", label: "15" },
    { id: "20", label: "20" },
    { id: "25", label: "25" },
    { id: "30", label: "30" },
    { id: "35", label: "35" },
    { id: "40", label: "40" },
    { id: "45", label: "45" },
    { id: "50", label: "50" },
  ];

  return (
    <SelectCustom
      items={options}
      value={numOfQuestions.toString()}
      onChange={(value) => setNumOfQuestions(Number(value))}
    />
  );
};
