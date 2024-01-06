import { Pills } from "./PillsList";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PillsItem = ({ id, title, text, photo, category, source }: Pills) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("PillsScreen", {
          id,
          title,
          text,
          photo,
          category,
          source,
        })
      }
    >
      <Image
        style={styles.img}
        source={{ uri: photo ? photo : "https://via.placeholder.com/150" }}
      />
      <Text style={styles.title}>"{title}"</Text>
      <View style={styles.button}>
        <Text style={{ color: "#000" }}>Read now</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eeeeee",
    padding: 20,
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    borderColor: "#000000",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
    width: "50%",
    marginTop: 10,
  },
});

export default PillsItem;
