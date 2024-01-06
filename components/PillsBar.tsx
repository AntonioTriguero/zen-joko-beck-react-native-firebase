import { View, StyleSheet, Text } from "react-native";
import PillsList from "./PillsList";
import { Ionicons } from "@expo/vector-icons";

const PillsBar = () => {
  return (
    <>
      <View style={styles.pillsBox}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Ionicons
            name="book"
            size={24}
            color="#eeeeee"
            style={{ marginRight: 10, paddingTop: 3 }}
          />
          <Text style={{ color: "#eeeeee", fontWeight: "bold", fontSize: 20 }}>
            Zen Pills
          </Text>
        </View>
        {/*<PillsList />*/}

        <PillsList />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pillsBox: {
    backgroundColor: "#000000",
    padding: 20,
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "transparent",
    marginTop: -2,
  },
});

export default PillsBar;
