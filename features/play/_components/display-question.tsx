import { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import type { Question } from "../_types/question";
import type { Status } from "../_types/status";

type Props = {
  question: Question;
  status: Status;
};

export const DisplayQuestion = ({ question, status }: Props) => {
  const numbers = Array.from({ length: 9 }, (_, i) => i);

  const [shapeContainerSize, setShapeContainerSize] = useState({
    width: 0,
    height: 0,
  });

  const hexagon = useMemo(() => {
    const { width, height } = shapeContainerSize;
    const size = Math.min(width, height);
    if (size <= 0) return null;

    const strokeWidth = 1;

    const cx = width / 2;
    const cy = height / 2;
    const r = Math.max(0, size / 2 - strokeWidth / 2);

    const angles = [0, 60, 120, 180, 240, 300];
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const pts = angles
      .map((deg) => {
        const rad = toRad(deg);
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return `${x},${y}`;
      })
      .join(" ");

    return { width, height, strokeWidth, points: pts };
  }, [shapeContainerSize]);

  return (
    <FlatList
      data={numbers}
      numColumns={3}
      columnWrapperClassName="flex gap-x-0.5"
      contentContainerClassName="gap-y-0.5"
      renderItem={({ index }) => {
        const isActive = index === question.place;

        if (!isActive || status !== "displayQuestion") {
          return <View className="flex-1 aspect-square" />;
        }

        const isSquare = question.shape === "square";
        const isCircle = question.shape === "circle";
        const isHexagon = question.shape === "hexagon";

        return (
          <View className="flex-1 aspect-square flex items-center justify-center">
            {(isSquare || isCircle) && (
              <View
                className={`w-full h-full flex items-center justify-center border ${
                  isCircle ? "rounded-full" : "rounded-lg"
                }`}
                style={{ borderColor: question.color }}
              >
                <Text className="text-4xl" style={{ color: question.color }}>
                  {question.character}
                </Text>
              </View>
            )}

            {isHexagon && (
              <View
                className="w-full h-full items-center justify-center relative"
                onLayout={(e) => {
                  const { width, height } = e.nativeEvent.layout;
                  if (
                    width !== shapeContainerSize.width ||
                    height !== shapeContainerSize.height
                  ) {
                    setShapeContainerSize({ width, height });
                  }
                }}
              >
                {hexagon && (
                  <Svg width={hexagon.width} height={hexagon.height}>
                    <Polygon
                      points={hexagon.points}
                      stroke={question.color}
                      strokeWidth={hexagon.strokeWidth}
                      strokeLinejoin="round"
                      fill="transparent"
                    />
                  </Svg>
                )}

                <View className="absolute inset-0 items-center justify-center">
                  <Text className="text-4xl" style={{ color: question.color }}>
                    {question.character}
                  </Text>
                </View>
              </View>
            )}
          </View>
        );
      }}
    />
  );
};
