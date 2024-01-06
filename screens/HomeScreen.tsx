import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/*SEARCH BAR - substitue it by a button that looks identical and goes to the search bar screen*/}
      <SearchBar />
      {/*CATEGORIES*/}
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});

export default HomeScreen;
