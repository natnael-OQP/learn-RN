import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Category from "./src/components/Category";
import axios from "axios";
import Restaurant from "./src/components/Restaurant";

export default function App() {
  const [term, setTerm] = useState("");
  const commonCategories = [
    {
      name: "Burger",
      img: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      img: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      img: require("./src/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      img: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      img: require("./src/assets/images/steak.png"),
    },
    {
      name: "Pasta",
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
      <Restaurant />
      <StatusBar style="auto" />
    </View>
  );
}
