import { StyleSheet, FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

const Category = ({ term, commonCategories, setTerm }) => {
  return (
    <FlatList
      data={commonCategories}
      renderItem={({ item: { name, img }, index }) => (
        <CategoryItem
          name={name}
          img={img}
          index={index}
          handelPress={() => setTerm(name)}
          active={term}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name}
    />
  );
};

export default Category;

const styles = StyleSheet.create({});
