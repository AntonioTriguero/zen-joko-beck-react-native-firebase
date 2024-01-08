import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import VideosItem from "./VideosItem";
import { useState, useEffect } from "react";

const videoIds: string[] = [
  "ojR0IMhXef0",
  "nKtoSnys-Vs",
  "ZXjDwEJ9tCA",
  "KYMW-qeyHR0",
];

const PillsList = () => {
  //

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

  const renderItem = ({ item }: { item: string }) => {
    return <VideosItem videoId={item} />;
  };
  return (
    <View>
      <FlatList
        data={videoIds}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        horizontal
        // numColumns={2}
        // refreshControl={<RefreshControl refreshing={false} onRefresh={() => fetchData()} />}
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

export default PillsList;
