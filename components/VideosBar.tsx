import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import VideosList from "./VideosList";
import { useNavigation } from "@react-navigation/native";

const VideosBar = () => {
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
          onPress={() => navigation.navigate("VideosScreen")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="video-vintage"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 10, paddingBottom: 3 }}
            />
            <Text
              style={{
                color: "#eeeeee",
                fontWeight: "bold",
                fontSize: 18,
                fontFamily: "monospace",
              }}
            >
              Zen Talks
            </Text>
          </View>
          {/*RIGHT SIDE*/}

          <AntDesign
            name="right"
            size={20}
            color="#eeeeee"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        {/*<Videos />*/}
        <VideosList />
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

export default VideosBar;
