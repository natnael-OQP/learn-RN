import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "./common/style";

export default function Search() {
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput placeholder="Restaurant, food" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
  },
  elevation,
  input: {
    width: "100%",
    fontSize: 19,
    marginLeft: 10,
  },
});
