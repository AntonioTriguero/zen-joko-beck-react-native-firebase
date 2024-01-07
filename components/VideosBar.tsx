import { View, StyleSheet, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import VideosList from "./VideosList";

const VideosBar = () => {
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
          <MaterialCommunityIcons
            name="video-vintage"
            size={28}
            color="#eeeeee"
            style={{ marginRight: 10, paddingBottom: 3 }}
          />
          <Text
            style={{
              color: "#eeeeee",
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "monospace",
            }}
          >
            Zen Talks
          </Text>
        </View>
        {/*<Videos />*/}
        <VideosList />
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

export default VideosBar;
