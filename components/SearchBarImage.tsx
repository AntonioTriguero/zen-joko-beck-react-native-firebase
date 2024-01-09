import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchBarImage = () => {
  const navigation = useNavigation<any>();
  return (
    <>
      <TouchableOpacity
        style={styles.searchBox}
        onPress={() => {
          navigation.navigate("SearchAllPillsScreen");
        }}
      >
        <View style={styles.inputBox}>
          <Feather
            name="search"
            size={20}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.input}>Search Topic</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#242424",
    flexDirection: "row",
    padding: 10,
    alighItems: "center",
  },
  searchBox: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingBottom: 5,
    paddingTop: 10,

    justifyContent: "center",
  },
  input: {
    color: "#eeeeee",
  },
});

export default SearchBarImage;
