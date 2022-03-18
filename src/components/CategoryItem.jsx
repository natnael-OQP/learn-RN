import { StyleSheet, Text, View, Image } from "react-native";
import { elevation } from "../components/common/style.js";

const CategoryItem = () => {
  return (
    <View style={[styles.wrapper, elevation]}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/burger.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.header}>Burger</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  elevation,
  wrapper: {
    width: 70,
    height: 100,
    margin: 30,
    borderRadius: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(241,186,87)",
  },
  imageContainer: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  header: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
