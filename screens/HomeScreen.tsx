import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import PillsBar from "../components/PillsBar";
import BarSeparator from "../components/BarSeparator";
import VideosBar from "../components/VideosBar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/*Search bar - substitue it by a button that looks identical and goes to the search bar screen*/}
      <SearchBar />

      {/*Categories bar*/}

      <Categories />

      {/*<Bar Separator />*/}

      <BarSeparator />

      {/*Pills bar*/}

      <PillsBar />

      {/*<Bar Separator />*/}

      <BarSeparator />

      {/*Video bar*/}

      <VideosBar />
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
