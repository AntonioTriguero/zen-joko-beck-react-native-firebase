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
            placeholderTextColor="white"

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
    backgroundColor: "#5b5b5b",
    padding: 10,
    flexDirection: "row",
  },
  searchBox: {
    backgroundColor: "#000000",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 1,
    justifyContent: "center",
  },
  input: {
    color: "white",
  },
});

export default SearchBar;
