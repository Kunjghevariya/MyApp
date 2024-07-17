import { Stack } from 'expo-router/stack';
import { NativeWindStyleSheet } from "nativewind";



NativeWindStyleSheet.setOutput({
    default: "native",
});
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
