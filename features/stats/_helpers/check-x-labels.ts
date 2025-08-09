export const checkXLabels = (xLabels: string[]) => {
  const fallBackXLabels = Array.from({ length: 31 }, (_, idx) => {
    const day = idx + 1;
    return day % 5 === 0 ? `${day}日` : "";
  });

  return xLabels.length ? xLabels : fallBackXLabels;
};
