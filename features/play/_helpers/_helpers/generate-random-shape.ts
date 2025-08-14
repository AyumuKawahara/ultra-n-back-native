import type { Shape } from "../../_types/question";

export const generateRandomShape = (): Shape => {
  const shapes: Shape[] = ["circle", "square", "hexagon"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};
