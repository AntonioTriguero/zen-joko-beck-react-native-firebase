import { Pill } from "./PillsList";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PillsItem = (
  { id, title, text, photo, category, source, read }: Pill,
  forScreen?: boolean
) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={[styles.card, { marginVertical: forScreen ? 5 : 0 }]}
      onPress={() =>
        navigation.navigate("PillsScreen", {
          id,
          title,
          text,
          photo,
          category,
          source,
          read,
        })
      }
    >
      <Image
        style={styles.img}
        source={{ uri: photo ? photo : "https://via.placeholder.com/150" }}
      />
      <Text style={styles.title}>"{title}"</Text>
      <View
        style={[
          styles.button,
          {
            backgroundColor: read ? "#1b5a67" : "#fff",
            borderColor: read ? "transparent" : "#000000",
          },
        ]}
      >
        <Text style={{ color: read ? "#eeeeee" : "#000", fontSize: 12 }}>
          {read ? "Read" : "Read now"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eeeeee",
    padding: 20,
    alignItems: "center",
    maxWidth: 225,
    minWidth: 225,
    Height: 300,
    marginRight: 10,
  },
  img: {
    width: 170,
    height: 130,
    resizeMode: "cover",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    flexWrap: "wrap",
    overflow: "visible",
  },
  button: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
    width: "50%",
    marginTop: 10,
  },
});

export default PillsItem;
