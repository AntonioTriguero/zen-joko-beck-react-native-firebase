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
  handleRefresh?: () => void;
  refreshing?: boolean;
}

const PillsList = ({ pills, forScreen, handleRefresh, refreshing }: Pills) => {
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

export default PillsList;
