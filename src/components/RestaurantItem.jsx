import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { elevation } from "./common/style";

const RestaurantItem = ({ item }) => {
  const { name, imageUrl, rate } = item;
  return (
    <View style={[styles.container, styles.elevation]}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rate}>{rate} Stars</Text>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  elevation,
  container: {
    marginVertical: 15,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
    height: 100,
    alignSelf: "stretch",
    alignItems: "center",
    marginEnd: 4,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: "50%",
    marginLeft: 10,
    backgroundColor: "#e5e5e5",
  },
  infoContainer: {
    flexDirection: "column",
    marginLeft: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  rate: {
    fontWeight: "500",
    fontSize: 12,
    marginTop: 7,
  },
});
