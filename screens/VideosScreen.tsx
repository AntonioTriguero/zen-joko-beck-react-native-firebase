import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import VideosList from "../components/VideosList";

const VideosScreen = () => {
  const navigation = useNavigation();

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
