import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PillsList from "./PillsList";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PillsBar = () => {
  const navigation = useNavigation<any>();
  return (
    <>
      <View style={styles.pillsBox}>
        {/*<Pills bar title />*/}

        {/*LEFT SIDE*/}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("AllPillsScreen")}
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
            name="right"
            size={24}
            color="#eeeeee"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>

        {/*<PillsList />*/}

        <PillsList />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pillsBox: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "transparent",
    marginTop: -2,
  },
});

export default PillsBar;
