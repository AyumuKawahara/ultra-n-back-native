import { Stack } from "expo-router";

export const OthersStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "その他",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="contact/index"
        options={{
          title: "ご要望・お問い合わせ",
        }}
      />
    </Stack>
  );
};
