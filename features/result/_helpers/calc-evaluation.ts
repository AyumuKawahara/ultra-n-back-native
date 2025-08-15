export const calcEvaluation = (rate: number) => {
  if (rate >= 90) {
    return {
      text: "神プレイ！",
      color: "#2ECC71",
    };
  }

  if (rate >= 70) {
    return {
      text: "いい感じ！",
      color: "#1E90FF",
    };
  }

  if (rate >= 50) {
    return {
      text: "次はもっといける！",
      color: "#F1C40F",
    };
  }

  return {
    text: "まずは慣れよう",
    color: "#E74C3C",
  };
};
