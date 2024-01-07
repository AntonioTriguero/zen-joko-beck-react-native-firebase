import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <>
      <View style={styles.searchBox}>
        <View style={styles.inputBox}>
          <Feather
            name="search"
            size={20}
            color="white"
            style={{ marginRight: 10, paddingTop: 3 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Search Bar"
            placeholderTextColor="#eeeeee"

            // value={title}
            // onChangeText={setTitle}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#242424",
    padding: 5,
    flexDirection: "row",
  },
  searchBox: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: "center",
  },
  input: {
    color: "#eeeeee",
  },
});

export default SearchBar;
