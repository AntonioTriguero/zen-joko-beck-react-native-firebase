import { View, StyleSheet } from "react-native";
import VideosList from "../components/VideosList";

const VideosScreen = () => {
  return (
    <View style={styles.container}>
      <VideosList forScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VideosScreen;
