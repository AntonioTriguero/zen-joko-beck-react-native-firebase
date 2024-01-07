import { View, FlatList, RefreshControl } from "react-native";
import PillsItem from "./PillsItem";
import { pills } from "../data/pillsData";

export interface Pill {
  id: string;
  title: string;
  text: string;
  photo: string;
  category: string;
  source: string;
}

const PillsList = () => {
  const renderItem = ({ item }: { item: Pill }) => {
    return (
      <PillsItem
        id={item.id}
        title={item.title}
        text={item.text}
        photo={item.photo}
        category={item.category}
        source={item.source}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={pills}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        // refreshControl={<RefreshControl refreshing={false} onRefresh={() => fetchData()} />}
      />
    </View>
  );
};

export default PillsList;
