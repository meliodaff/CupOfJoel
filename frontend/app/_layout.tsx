import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      <ThemeProvider>
        <StatusBar hidden={true} />
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }}></Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}
