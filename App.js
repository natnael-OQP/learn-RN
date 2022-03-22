import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Category from "./src/components/Category";
import Restaurant from "./src/components/Restaurant";

export default function App() {
  const [term, setTerm] = useState("watch");
  // term
  const commonCategories = [
    {
      name: "watch",
      img: require("./src/assets/images/pizza.png"),
    },
    {
      name: "hats",
      img: require("./src/assets/images/cake.png"),
    },
    {
      name: "sneakers",
      img: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "jackets",
      img: require("./src/assets/images/steak.png"),
    },
    {
      name: "womens",
      img: require("./src/assets/images/pasta.png"),
    },
    {
      name: "mens",
      img: require("./src/assets/images/pasta.png"),
    },
  ];
  return (
    <View>
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
}
