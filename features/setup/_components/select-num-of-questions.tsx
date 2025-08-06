import { SelectCustom } from "@/components/select-custom";

type Props = {
  numOfQuestions: number;
  setNumOfQuestions: (numOfQuestions: number) => void;
};

export const SelectNumOfQuestions = ({
  numOfQuestions,
  setNumOfQuestions,
}: Props) => {
  const options = Array.from({ length: 20 }, (_, i) => {
    const value = (i + 1) * 5;
    return { id: value.toString(), label: value.toString() };
  });

  return (
    <SelectCustom
      items={options}
      value={numOfQuestions.toString()}
      onChange={(value) => setNumOfQuestions(Number(value))}
    />
  );
};
