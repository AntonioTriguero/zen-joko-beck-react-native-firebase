import { View, FlatList } from "react-native";
import PillsItem from "./PillsItem";

export interface Pill {
  id: string;
  title: string;
  text: string;
  photo: string;
  category: string;
  source: string;
  read: boolean;
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
        read={item.read}
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
