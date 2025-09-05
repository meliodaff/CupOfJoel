import CartContext from "@/contexts/CartContext";
import UseTheme, { ColorScheme } from "@/hooks/useTheme";
import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Cart = () => {
  const { colors } = UseTheme();
  const styles = createStyles(colors);
  const { cart, setCart } = useContext(CartContext);
  return (
    <ScrollView style={styles.container}>
      {cart.length === 0 ? (
        <View>
          <Text>No item yet</Text>
        </View>
      ) : (
        cart.map((item) => (
          <View style={[styles.itemContainer, styles.row]}>
            <Text>IMG</Text>
            <View
              style={{
                width: "40%",
              }}
            >
              <Text style={{ fontSize: 17 }}>{item.name}</Text>
              <Text>{item.size}</Text>
            </View>
            <View>
              <Text>
                {item.addOns[0].name}: {item.addOns[0].quantity}
              </Text>
            </View>
            <View style={{ width: "20%" }}>
              <Text>
                Qty. <Text style={{ fontWeight: 700 }}>{item.quantity}</Text>
              </Text>
              <Text>
                Total. <Text style={{ fontWeight: 700 }}>{item.price}</Text>{" "}
              </Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderColor: "black",
      borderWidth: 1,
    },
    itemContainer: {
      justifyContent: "space-between",
      marginBottom: 10,
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
    },
  });
  return styles;
};

export default Cart;
