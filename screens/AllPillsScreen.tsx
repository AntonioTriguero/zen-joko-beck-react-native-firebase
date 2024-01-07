import { View, StyleSheet, Text } from "react-native";
import PillsList from "../components/PillsList";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const AllPillsScreen = () => {
  return (
    <>
      <View style={styles.pillsBox}>
        {/*<Pills bar title />*/}

        {/*LEFT SIDE*/}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="book"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 10, paddingTop: 3 }}
            />
            <Text
              style={{
                color: "#eeeeee",
                fontWeight: "bold",
                fontSize: 20,
                fontFamily: "monospace",
              }}
            >
              Zen Pills
            </Text>
          </View>
          {/*RIGHT SIDE*/}

          <AntDesign
            name="doubleright"
            size={24}
            color="#eeeeee"
            style={{ marginRight: 10 }}
          />
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

export default AllPillsScreen;
