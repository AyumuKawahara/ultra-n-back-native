export const generateRandomColor = (): string => {
  const colors = ["red", "green", "blue", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
};
