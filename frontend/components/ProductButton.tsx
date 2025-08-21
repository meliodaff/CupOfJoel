import coffeeData from "@/data/coffeeData";
import UseTheme, { ColorScheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";

const ProductButton = () => {
  const { colors } = UseTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.container}>
      {coffeeData.map((coffee, index) => (
        <View key={index}>
          <LinearGradient
            colors={colors.gradients.surface}
            style={{ borderColor: colors.border, borderWidth: 1 }}
          >
            <TouchableOpacity style={styles.productButton}>
              <Text style={styles.text}>img</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.text}>{coffee.name}</Text>
        </View>
      ))}
    </View>
  );
};

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      columnGap: 30,
      rowGap: 10,
    },
    text: {
      color: colors.text,
      fontWeight: "600",
      fontSize: 15,
      textAlign: "center",
      width: 110,
    },
    productButton: {
      height: 65,
      width: 100,
      justifyContent: "center",
    },
  });
  return styles;
};

export default ProductButton;
