import { View, FlatList, RefreshControl } from "react-native";

import VideoItem from "./VideoItem";

const videoIds: string[] = [
  "ojR0IMhXef0",
  "nKtoSnys-Vs",
  "ZXjDwEJ9tCA",
  "KYMW-qeyHR0",
];

const PillsList = () => {
  const renderItem = ({ item }: { item: string }) => {
    return <VideoItem videoId={item} />;
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

export default PillsList;
