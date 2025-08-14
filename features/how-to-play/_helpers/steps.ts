import type { ImageSource } from "expo-image";

export const steps: {
  label: string;
  image: ImageSource;
  caption: string | string[];
  tags?: string[];
}[] = [
  {
    label: "STEP 1",
    image: require("../_assets/scene1.png"),
    caption: "「左上」に「T」が出たことを覚えます",
  },
  {
    label: "STEP 2",
    image: require("../_assets/scene2.png"),
    caption: "「右上」に「O」が出たことを覚えます",
  },
  {
    label: "STEP 3",
    image: require("../_assets/scene3.png"),
    caption: [
      "「左上」に「T」が出たことを覚えます。",
      "2つ前と「場所」「文字」が一致しているので、両方のボタンをタップしましょう！",
    ],
    tags: ["場所一致", "文字一致"],
  },
  {
    label: "STEP 4",
    image: require("../_assets/scene4.png"),
    caption: [
      "「上」に「O」が出たことを覚えます。",
      "2つ前と「文字」のみが一致しているので、「文字」のボタンをタップしましょう！",
    ],
    tags: ["文字一致"],
  },
];
