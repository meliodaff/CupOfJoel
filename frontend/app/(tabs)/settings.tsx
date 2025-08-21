import coffeeData from "@/data/coffeeData";
import React from "react";
import { StyleSheet, View, Text, StatusBar, ScrollView } from "react-native";

const Settings = () => {
  return (
    <ScrollView>
      {coffeeData.map((coffee, index) => (
        <View key={index}>
          <Text>Coffee Name: {coffee.name}</Text>
          <Text>Coffee Price: {coffee.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Settings;
