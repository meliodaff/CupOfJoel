import coffeeData from "@/data/coffeeData";
import UseTheme, { ColorScheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import Product from "@/types/product";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import ProductModal from "./ProductModal";

const ProductButton = (props: any) => {
  const { colors } = UseTheme();
  const styles = createStyles(colors);
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    name: "",
    category: "",
    price: 0,
    image: "",
  });
  return (
    <View style={styles.container}>
      {props.coffeeData.map((coffee: Product, index: number) => {
        const { id, name, category, price, image } = coffee;
        return (
          <>
            <View key={index}>
              <LinearGradient
                colors={colors.gradients.surface}
                style={{ borderColor: colors.border, borderWidth: 1 }}
              >
                <TouchableOpacity
                  style={styles.productButton}
                  onPress={() => {
                    setVisible(true);
                    setSelectedProduct({ id, name, category, price, image });
                  }}
                >
                  <Text>img</Text>
                </TouchableOpacity>
              </LinearGradient>
              <Text style={styles.text}>{name}</Text>
            </View>
          </>
        );
      })}
      {visible && (
        <ProductModal
          visible={visible}
          setVisible={setVisible}
          coffee={selectedProduct.name}
        />
      )}
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
