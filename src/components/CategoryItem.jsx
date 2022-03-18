import { StyleSheet, Text, View, Image } from "react-native";
import { elevation } from "../components/common/style.js";

const CategoryItem = ({ name, img }) => {
  return (
    <View style={[styles.wrapper, elevation]}>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} />
      </View>
      <Text style={styles.header}>{name}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  elevation,
  wrapper: {
    width: 70,
    height: 100,
    marginVertical: 15,
    marginHorizontal: 10,
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
