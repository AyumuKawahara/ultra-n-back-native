export const checkDatasets = (datasets: number[]) => {
  const fallBackDatasets = Array.from({ length: 31 }, () => 0);

  return datasets.length ? datasets : fallBackDatasets;
};
