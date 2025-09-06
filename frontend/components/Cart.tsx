import CartContext from "@/contexts/CartContext";
import UseTheme, { ColorScheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";

const Cart = () => {
  const { colors } = UseTheme();
  const styles = createStyles(colors);
  const { cart, setCart } = useContext(CartContext);
  const [clearCartConfirmationModal, setClearCartConfirmationModal] =
    useState<boolean>(false);
  return (
    <View>
      <ScrollView style={styles.container}>
        {cart.length === 0 ? (
          <View>
            <Text
              style={{
                marginHorizontal: "auto",
                marginVertical: 50,
                fontSize: 100,
                fontWeight: "700",
              }}
            >
              No item yet
            </Text>
          </View>
        ) : (
          cart.map((item, index) => (
            <View style={[styles.itemContainer, styles.row]} key={index}>
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
      {cart.length > 0 && (
        <TouchableOpacity
          style={styles.clearCart}
          onPress={() => {
            setClearCartConfirmationModal(true);
          }}
        >
          <LinearGradient
            colors={colors.gradients.danger}
            style={{
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Clear Cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={clearCartConfirmationModal}
        onRequestClose={() => {
          setClearCartConfirmationModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to clear the cart?</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setClearCartConfirmationModal(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.clearButton]}
                onPress={() => {
                  setCart([]); // clear state
                  setClearCartConfirmationModal(false);
                }}
              >
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderColor: "black",
      borderWidth: 1,
      height: 250,
      marginBottom: 10,
    },
    itemContainer: {
      justifyContent: "space-between",
      marginBottom: 20,
      alignItems: "center",
      borderBottomColor: "black",
      borderBottomWidth: 1,
    },
    row: {
      flexDirection: "row",
    },
    clearCart: {
      alignSelf: "flex-end",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)", // dim background
    },

    modalView: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: "30%",
    },

    modalText: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: "center",
      fontWeight: "500",
    },

    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },

    button: {
      flex: 1,
      paddingVertical: 10,
      marginHorizontal: 5,
      borderRadius: 8,
      alignItems: "center",
    },

    cancelButton: {
      backgroundColor: "#aaa",
    },

    clearButton: {
      backgroundColor: "#e63946",
    },

    buttonText: {
      color: "white",
      fontWeight: "600",
    },
  });
  return styles;
};

export default Cart;
