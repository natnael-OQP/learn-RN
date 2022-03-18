import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
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
    <View style={styles.container}>
      <Header />
      <Search />
      <FlatList
        data={commonCategories}
        renderItem={({ item: { name, img }, index }) => (
          <CategoryItem name={name} img={img} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
