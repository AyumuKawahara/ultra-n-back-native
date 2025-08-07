import { Stack } from "expo-router";

export const OthersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="contact/index"
        options={{
          title: "ご要望・お問い合わせ",
        }}
      />
    </Stack>
  );
};
