import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { elevation } from "../components/common/style.js";

const CategoryItem = ({ name, img, index, handelPress, active }) => {
  return (
    <TouchableOpacity onPress={handelPress}>
      <View
        style={[
          styles.wrapper,
          elevation,
          index === 0 ? { marginLeft: 22 } : { marginLeft: 10 },
          active === name
            ? { backgroundColor: "rgb(241,186,87)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.image} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  elevation,
  wrapper: {
    width: 70,
    height: 100,
    marginVertical: 15,
    borderRadius: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
