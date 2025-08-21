import useTheme, { ColorScheme } from "@/hooks/useTheme";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import ProductButton from "../../components/ProductButton";

export default function Index() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <View style={styles.leftSection}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <LinearGradient
            colors={colors.gradients.surface}
            style={{ borderColor: colors.border, borderWidth: 1 }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.text, { paddingTop: 7 }]}>Coffee</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={colors.gradients.surface}
            style={{ borderColor: colors.border, borderWidth: 1 }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Non</Text>
              <Text style={styles.text}>Coffee</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            justifyContent: "flex-end",
          }}
        >
          <LinearGradient
            colors={colors.gradients.surface}
            style={{
              borderColor: colors.border,
              borderWidth: 1,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Cart</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={colors.gradients.success}
            style={{ borderColor: colors.border, borderWidth: 1 }}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Proceed</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.rightSection}>
        <ScrollView>
          <ProductButton />
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flex: 1,
    },
    leftSection: {
      width: "30%" as any,
      justifyContent: "space-around",
      borderRightColor: colors.textMuted,
      borderRightWidth: 1,
    },
    rightSection: {
      width: "70%" as any,
      flexDirection: "row",
      alignItems: "flex-start",
      borderLeftColor: colors.textMuted,
      borderLeftWidth: 1,
      flexWrap: "wrap",
      padding: 20,
    },
    button: {
      paddingHorizontal: 30,
      paddingVertical: 25,
    },
    text: {
      marginHorizontal: "auto",
      color: colors.text,
      fontWeight: 600,
      fontSize: 15,
    },
    productButton: {
      height: 80,
      width: 100,
      justifyContent: "center",
    },
  });
  return styles;
};
