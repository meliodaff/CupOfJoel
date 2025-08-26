import useTheme, { ColorScheme } from "@/hooks/useTheme";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import ProductButton from "../../components/ProductButton";
import coffeeData from "@/data/coffeeData";
import nonCoffeeData from "@/data/nonCoffeeData";
import { useState } from "react";
import Cart from "@/components/Cart";
import Proceed from "@/components/Proceed";
import cart from "@/types/cart";
import CartContext from "@/contexts/CartContext";

export default function Index() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const [openMenuModal, setOpenMenuModal] = useState(true);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openProceedModal, setOpenProceedModal] = useState(false);

  const [cart, setCart] = useState<cart[]>([]);

  const handleOpenCoffeeModal = () => {
    setOpenMenuModal(true);
    setOpenCartModal(false);
    setOpenProceedModal(false);
  };
  const handleOpenNonCoffeeModal = () => {
    setOpenMenuModal(false);
    setOpenCartModal(false);
    setOpenProceedModal(false);
  };

  const handleOpenCartModal = () => {
    setOpenMenuModal(false);
    setOpenCartModal(true);
    setOpenProceedModal(false);
    alert(JSON.stringify(cart));
  };

  const handleOpenProceedModal = () => {
    setOpenMenuModal(false);
    setOpenCartModal(false);
    setOpenProceedModal(true);
  };

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <LinearGradient
        colors={colors.gradients.background}
        style={styles.container}
      >
        <View style={styles.leftSection}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <LinearGradient
              colors={colors.gradients.surface}
              style={{ borderColor: colors.border, borderWidth: 1 }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={handleOpenCoffeeModal}
              >
                <Text style={[styles.text, { paddingTop: 7 }]}>Coffee</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={colors.gradients.surface}
              style={{ borderColor: colors.border, borderWidth: 1 }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={handleOpenNonCoffeeModal}
              >
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
              <TouchableOpacity
                style={styles.button}
                onPress={handleOpenCartModal}
              >
                <Text style={styles.text}>Cart</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={colors.gradients.success}
              style={{ borderColor: colors.border, borderWidth: 1 }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={handleOpenProceedModal}
              >
                <Text style={styles.text}>Proceed</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.rightSection}>
          <ImageBackground
            source={require("../../assets/images/cojl.png")} // adjust path
            resizeMode="cover"
            style={{ flex: 1 }}
            imageStyle={{ opacity: 0.2 }}
          >
            <ScrollView>
              {openMenuModal ? (
                <ProductButton coffeeData={coffeeData} />
              ) : openCartModal ? (
                <Cart />
              ) : openProceedModal ? (
                <Proceed />
              ) : (
                <ProductButton coffeeData={nonCoffeeData} />
              )}
            </ScrollView>
          </ImageBackground>
        </View>
      </LinearGradient>
    </CartContext.Provider>
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
