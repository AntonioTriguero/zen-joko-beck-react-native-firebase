import { View, StyleSheet, Linking, Text } from "react-native";
import SearchBarImage from "../components/SearchBarImage";
import Categories from "../components/Categories";
import PillsBar from "../components/PillsBar";
import BarSeparator from "../components/BarSeparator";
import VideosBar from "../components/VideosBar";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/*Search bar Image to click and go the search screen*/}

      <SearchBarImage />

      {/*Categories bar*/}

      <Categories />

      {/*<Grey Bar Separator />*/}

      <BarSeparator />

      {/*Pills bar*/}

      <PillsBar />

      {/*<Grey Bar Separator />*/}

      <BarSeparator />

      {/*Video bar*/}

      <VideosBar />

      {/*<Grey Bar Separator />*/}

      <BarSeparator />

      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://vanesascode.com/");
        }}
      >
        <Text style={styles.signature}>by vanesascode</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  signature: {
    color: "#eeeeee",
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default HomeScreen;
