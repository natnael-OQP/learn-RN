import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const RestaurantItem = ({ item }) => {
  const { name } = item;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({});
