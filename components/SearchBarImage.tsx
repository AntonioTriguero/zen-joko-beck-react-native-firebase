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
          navigation.navigate("SearchScreen");
        }}
      >
        <View style={styles.inputBox}>
          <Feather
            name="search"
            size={20}
            color="white"
            style={{ marginRight: 10, paddingTop: 3 }}
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

export default SearchBarImage;
