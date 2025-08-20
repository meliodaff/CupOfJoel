import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Im the index",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Im the settings",
        }}
      />
    </Tabs>
  );
}
