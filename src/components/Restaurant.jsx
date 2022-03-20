import { View, Text, StyleSheet } from "react-native";
import React from "react";
import yelp from "../api/yelp.js";

export default function Restaurant() {
  const search = async () => {
    const result = await yelp.get("/search", {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:19006",
      },
      params: {
        limit: 10,
        term: "Dessert",
        location: "Toronto",
      },
    });
    console.log(result);
  };
  search();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
