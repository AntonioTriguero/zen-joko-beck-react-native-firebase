import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import PillsItem from "./PillsItem";
import { useState, useEffect } from "react";

export interface Pill {
  id: string;
  title: string;
  text: string;
  photo: string;
  category: string;
  source: string;
  forScreen?: boolean;
}

interface Pills {
  pills: Pill[];
  forScreen?: boolean;
}

const PillsList = ({ pills, forScreen }: Pills) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // refresh effect:

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // loading effect:

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
  const renderItem = ({ item }: { item: Pill }) => {
    return (
      <PillsItem
        id={item.id}
        title={item.title}
        text={item.text}
        photo={item.photo}
        category={item.category}
        source={item.source}
        forScreen
      />
    );
  };
  return (
    <View>
      <FlatList
        data={pills}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={!forScreen}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 118,
  },
});

export default PillsList;
