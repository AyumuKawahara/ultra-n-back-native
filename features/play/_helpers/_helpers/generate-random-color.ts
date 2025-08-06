export const generateRandomColor = (): string => {
  const colors = ["#FF4C4C", "#2ECC71", "#1E90FF", "#A64DFF"];
  return colors[Math.floor(Math.random() * colors.length)];
};
