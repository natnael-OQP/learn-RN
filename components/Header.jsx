import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={style.container}>
      <Text style={style.lightHeader}>grab your</Text>
      <Text style={style.boldHeader}>Delicious meal</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 30,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
