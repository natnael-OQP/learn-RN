import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
// components
import Header from "../components/Header.jsx";
import Search from "../components/Search";
import Category from "../components/Category";
import Restaurant from "../components/Restaurant";

const HomeScreens = () => {
  const [term, setTerm] = useState("watch");
  // term
  const commonCategories = [
    {
      name: "watch",
      img: require("../assets/images/pizza.png"),
    },
    {
      name: "hats",
      img: require("../assets/images/cake.png"),
    },
    {
      name: "sneakers",
      img: require("../assets/images/smoothies.png"),
    },
    {
      name: "jackets",
      img: require("../assets/images/steak.png"),
    },
    {
      name: "womens",
      img: require("../assets/images/pasta.png"),
    },
    {
      name: "mens",
      img: require("../assets/images/pasta.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Category
        term={term}
        commonCategories={commonCategories}
        setTerm={setTerm}
      />
      <Restaurant term={term} />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(253,253,253)",
  },
});
