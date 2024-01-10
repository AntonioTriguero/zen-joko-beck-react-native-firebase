import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const exploreTags: string[] = [
  "Your Read Pills",
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

const ExploreScreen = () => {
  const navigation = useNavigation<any>();

  const handleItemPress = (item: string): void => {
    if (item === "Relationships") {
      navigation.navigate("RelationshipsScreen");
    } else if (item === "Awareness") {
      navigation.navigate("AwarenessScreen");
    } else if (item === "False fears") {
      navigation.navigate("FalseFearsScreen");
    } else if (item === "Boundaries") {
      navigation.navigate("BoundariesScreen");
    } else if (item === "Your Read Pills") {
      navigation.navigate("AlreadyReadPillsScreen");
    }
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View
        style={[
          styles.categoryBox,
          {
            backgroundColor: item === "Your Read Pills" ? "000" : "#1b5a67",
          },
        ]}
      >
        <Text
          style={{
            color: "#eeeeee",
            textAlign: "center",
            fontSize: 18,
          }}
        >
          {item}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={exploreTags}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        extraData={exploreTags.length}
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
    flex: 1,
  },
  categoryBox: {
    paddingVertical: 10,
    backgroundColor: "#1b5a67",
    borderColor: "#eeeeee",
    borderWidth: 1,
    margin: 20,
  },
});
export default ExploreScreen;
