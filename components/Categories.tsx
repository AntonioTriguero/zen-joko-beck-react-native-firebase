import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const exploreTags: string[] = [
  "Explore",
  "Awareness",
  "False fears",
  "Boundaries",
  "Relationships",
  "Change",
  "Coping",
  "Recovery",
  "Practice",
  "Self",
];

const Categories = () => {
  const navigation = useNavigation<any>();

  const handleItemPress = (item: string): void => {
    if (item === "Explore") {
      navigation.navigate("ExploreScreen");
    } else if (item === "Awareness") {
      navigation.navigate("AwarenessScreen");
    } else if (item === "False fears") {
      navigation.navigate("FalseFearsScreen");
    } else if (item === "Boundaries") {
      navigation.navigate("BoundariesScreen");
    } else if (item === "Relationships") {
      navigation.navigate("RelationshipsScreen");
    }
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View
        style={[styles.categoryBox, index === 0 && styles.firstCategoryBox]}
      >
        <Text style={{ color: "#eeeeee" }}>{item} </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={exploreTags}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: "row",
    gap: 10,
  },
  categoryBox: {
    backgroundColor: "#000000",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderColor: "#eeeeee",
    borderWidth: 1,
    marginRight: 10,
  },
  firstCategoryBox: {
    backgroundColor: "#1b5a67",
  },
});

export default Categories;
