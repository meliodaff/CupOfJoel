import UseTheme, { ColorScheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Cart from "@/types/cart";
import Product from "@/types/product";
import CartContext from "@/contexts/CartContext";

const Divider = ({ colors }: { colors: ColorScheme }) => {
  return (
    <View
      style={{
        backgroundColor: colors.textMuted,
        width: 2,
        height: 20,
      }}
    ></View>
  );
};

const ProductModal = (props: any) => {
  const { colors } = UseTheme();
  const styles = createStyles(colors);
  const [extraShot, setExtraShot] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  // const [order, setOrder] = useState<Cart | null>(null);
  const { cart, setCart } = useContext(CartContext);

  const handleSubmit = (coffee: Product) => {
    const order: Cart = {
      id: coffee.id,
      name: coffee.name,
      category: coffee.category,
      image: coffee.image,
      price: coffee.price,
      quantity: quantity,
      addOns: [],
    };

    console.log(order);

    const repeatedOrder = cart.find(
      (item) =>
        item.id === order.id &&
        JSON.stringify(item.addOns) === JSON.stringify(order.addOns)
      // define the size here soon
    );

    if (repeatedOrder) {
      // setCart((prev) => {
      //   return [
      //     ...prev,
      //     { ...order, price: order.price * quantity, addOns: [] }, // it doest accumulate all the quantity
      //   ];
      // });
    } else {
      setCart((prev) => {
        return [...prev, { ...order, price: quantity * order.price }];
      });
    }
    props.setVisible(false);
  };

  return (
    <Modal
      visible={props.visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => props.setVisible(false)}
    >
      <View style={styles.centeredView}>
        <LinearGradient
          colors={colors.gradients.background}
          style={styles.modalView}
        >
          <View style={styles.header}>
            <Text style={styles.modalText}>{props.coffee.name}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityButton}>
                <TouchableOpacity
                  onPress={() => {
                    setExtraShot((prev) => {
                      if (prev >= 5) {
                        return prev;
                      }
                      return prev + 1;
                    });
                  }}
                >
                  <AntDesign
                    name="plus"
                    size={20}
                    color="black"
                    style={styles.addOrMinusButton}
                  />
                </TouchableOpacity>
                <Divider colors={colors} />
                <Text style={styles.quantityText}>{extraShot}</Text>
                <Divider colors={colors} />
                <TouchableOpacity
                  onPress={() => {
                    setExtraShot((prev) => {
                      if (prev <= 0) {
                        return prev;
                      }
                      return prev - 1;
                    });
                  }}
                  style={[styles.addOrMinusButton]}
                >
                  <AntDesign
                    name="minus"
                    size={20}
                    color="black"
                    style={styles.addOrMinusButton}
                  />
                </TouchableOpacity>
              </View>
              <Text>Extra shot</Text>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityButton}>
                <TouchableOpacity
                  onPress={() => {
                    setExtraShot((prev) => {
                      if (prev >= 5) {
                        return prev;
                      }
                      return prev + 1;
                    });
                  }}
                >
                  <AntDesign
                    name="plus"
                    size={20}
                    color="black"
                    style={styles.addOrMinusButton}
                  />
                </TouchableOpacity>
                <Divider colors={colors} />
                <Text style={styles.quantityText}>{extraShot}</Text>
                <Divider colors={colors} />
                <TouchableOpacity
                  onPress={() => {
                    setExtraShot((prev) => {
                      if (prev <= 0) {
                        return prev;
                      }
                      return prev - 1;
                    });
                  }}
                  style={[styles.addOrMinusButton]}
                >
                  <AntDesign
                    name="minus"
                    size={20}
                    color="black"
                    style={styles.addOrMinusButton}
                  />
                </TouchableOpacity>
              </View>
              <Text>Extra shot</Text>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityButton}>
                <TouchableOpacity
                  onPress={() => {
                    setExtraShot((prev) => {
                      if (prev >= 5) {
                        return prev;
                      }
                      return prev + 1;
                    });
                  }}
                >
                  <AntDesign
                    name="plus"
                    size={20}
                    color="black"
                    style={styles.addOrMinusButton}
                  />
                </TouchableOpacity>
                <Divider colors={colors} />
                <Text style={styles.quantityText}>{extraShot}</Text>
                <Divider colors={colors} />
                <TouchableOpacity
                  onPress={() => {
                    setExtraShot((prev) => {
                      if (prev <= 0) {
                        return prev;
                      }
                      return prev - 1;
                    });
                  }}
                  style={[styles.addOrMinusButton]}
                >
                  <AntDesign
                    name="minus"
                    size={20}
                    color="black"
                    style={styles.addOrMinusButton}
                  />
                </TouchableOpacity>
              </View>
              <Text>Extra shot</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityButton}>
                <TouchableOpacity
                  onPress={() => {
                    setQuantity((prev) => {
                      if (prev >= 5) {
                        return prev;
                      }
                      return prev + 1;
                    });
                  }}
                >
                  <AntDesign
                    name="plus"
                    size={20}
                    color="black"
                    style={styles.addOrMinusButton}
                  />
                </TouchableOpacity>
                <Divider colors={colors} />
                <Text style={styles.quantityText}>{quantity}</Text>
                <Divider colors={colors} />
                <TouchableOpacity
                  onPress={() => {
                    setQuantity((prev) => {
                      if (prev <= 1) {
                        return prev;
                      }
                      return prev - 1;
                    });
                  }}
                  style={[styles.addOrMinusButton]}
                >
                  <AntDesign
                    name="minus"
                    size={20}
                    color="black"
                    style={styles.addOrMinusButton}
                  />
                </TouchableOpacity>
              </View>
              <Text>Quantity</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Total: 0</Text>
              <TouchableOpacity
                style={[styles.buttonSubmit, styles.button]}
                onPress={() => {
                  handleSubmit(props.coffee);
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      borderRadius: 20,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: 400,
      height: 200,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    button: {
      borderRadius: 50,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: colors.danger,
    },
    buttonSubmit: {
      backgroundColor: colors.success,
      marginLeft: 15,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      fontSize: 20,
      fontWeight: 700,
      color: colors.text,
    },
    body: {
      flexDirection: "row",
      columnGap: 30,
      rowGap: 15,
      flexWrap: "wrap",
      width: 380,
      marginBottom: 15,
    },
    quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    quantityButton: {
      flexDirection: "row",
      backgroundColor: colors.bg,
      paddingVertical: 5,
      borderRadius: 20,
      alignItems: "center",
    },
    addOrMinusButton: {
      paddingHorizontal: 5,
    },
    quantityText: {
      marginHorizontal: 10,
    },

    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  return styles;
};

export default ProductModal;
