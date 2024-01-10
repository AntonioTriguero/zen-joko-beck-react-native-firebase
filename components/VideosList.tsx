import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import VideosItem from "./VideosItem";
import { useState, useEffect } from "react";

const videoIds: string[] = [
  "ojR0IMhXef0",
  "nKtoSnys-Vs",
  "ZXjDwEJ9tCA",
  "KYMW-qeyHR0",
  "8VRlaOI8ME8",
  "KTc5RHNwr1I?si",
  "u4ES89alu-U",
  "klIo5-racvo",
];

const VideosList = ({ forScreen }: { forScreen?: boolean }) => {
  // Logic of activity indicator to show fake data loading effect:

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#eeeeee" />
      </View>
    );
  }

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <>
        {forScreen ? (
          <Text style={{ color: "#eeeeee", textAlign: "center", marginTop: 5 }}>
            Talk num.{index + 1}
          </Text>
        ) : null}

        <VideosItem videoId={item} forScreen />
      </>
    );
  };
  return (
    <View>
      <FlatList
        data={videoIds}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        horizontal={!forScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 89,
  },
});

export default VideosList;
