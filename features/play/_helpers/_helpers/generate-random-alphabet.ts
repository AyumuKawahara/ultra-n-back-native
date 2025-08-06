export const generateRandomAlphabet = (): string => {
  const alphabet = "ETAOI";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};
