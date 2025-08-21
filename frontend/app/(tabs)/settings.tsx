import coffeeData from "@/data/coffeeData";
import UseTheme from "@/hooks/useTheme";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Settings = () => {
  const { toggleDarkMode } = UseTheme();
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          toggleDarkMode();
        }}
      >
        <Text>Dark Mode</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Settings;
