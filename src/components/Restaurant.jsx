import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import useRestaurant from "../hook/useRestaurant";

export default function Restaurant({ term }) {
  const [{ data, error, loading }, useRestaurant] = useRestaurant();
  useEffect(() => {
    useRestaurant(term);
  }, [term]);
  console.log(data, error, loading);
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
