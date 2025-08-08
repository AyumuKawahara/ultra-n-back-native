type Props = {
  xLabels: string[];
};

export const generateInitialDatasets = ({ xLabels }: Props) => {
  const dataLength = xLabels.length;

  return Array.from({ length: dataLength }, () => 0);
};
