import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import UseRestaurant from "../hook/useRestaurant";
import RestaurantItem from "./RestaurantItem";

export default function Restaurant({ term }) {
  const [{ data, error, loading }, useRestaurant] = UseRestaurant();

  useEffect(() => {
    useRestaurant(term);
  }, [term]);
  console.log();

  if (loading) return <ActivityIndicator size="large" marginVertical={40} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurant</Text>
      <FlatList
        data={data?.[0].items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <RestaurantItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
