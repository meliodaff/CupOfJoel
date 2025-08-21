import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden"); // hides bottom controls
  });
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
