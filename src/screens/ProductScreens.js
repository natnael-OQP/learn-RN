import { Button, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ProductScreens = ({ navigation, route: { params } }) => {
  const { name, imageUrl, rate, detail, oldPrice, price } = params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>{detail}</Text>
      <View style={styles.rateContainer}>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.rateWrapper}>
          <FontAwesome
            name="star"
            color="gold"
            size={20}
            style={{ marginRight: 10 }}
          />
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </View>
      <Text style={styles.button}>Add to Cart</Text>
    </View>
  );
};

export default ProductScreens;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: 300,
    resizeMode: "contain",
    backgroundColor: "transparent",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  detail: {
    marginVertical: 15,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    color: "gray",
  },
  rateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rateWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rate: {
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
    marginLeft: "10",
  },
  button: {
    marginTop: 20,
    paddingVertical: 6,
    height: 45,
    textAlign: "center",
    backgroundColor: "#00041E",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
