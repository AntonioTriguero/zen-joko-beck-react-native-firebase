import { Pills } from "./PillsList";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
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
      <Text>{title}</Text>
      <Image
        style={styles.img}
        source={{ uri: photo ? photo : "https://via.placeholder.com/150" }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default PillsItem;
