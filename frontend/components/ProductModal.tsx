import { ColorScheme } from "@/hooks/useTheme";
import React from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ProductModal = (props: any) => {
  console.log("re rendering");
  return (
    <Modal
      visible={props.visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => props.setVisible(false)}
    >
      {/* Dark overlay */}
      <View style={styles.centeredView}>
        {/* Modal box */}
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{props.coffee}</Text>

          {/* Example close button */}
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.setVisible(false)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // 👈 dark overlay behind modal
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ProductModal;
