import { View, FlatList, RefreshControl } from "react-native";
import PillsItem from "./PillsItem";
// import { useState, useEffect } from "react";

export interface Pills {
  id: string;
  title: string;
  text: string;
  photo: string;
  category: string;
  source: string;
}

const PillsList = () => {
  // const [pills, setPills] = useState([]);
  // const [updated, setUpdated] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   if (updated) {
  //     fetchData();
  //     setUpdated(false);
  //   }
  // }, [updated]);

  // const fetchData = () => {
  //   fetch('https://server-biblioteca-bubbo-vanesascode.onrender.com/books')
  //     .then(response => response.json())
  //     .then(json => {
  //       setBooks(json);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  const pills: Pills[] = [
    {
      id: "1",
      title: "We are this very moment",
      text: "The Diamond Sutra says, 'The past is ungraspable, the present is ungraspable, the future is ungraspable.' So all of us in this room; where are we? Are we in the past? No. Are we in the future? No. Are we in the present? No, we can't even say we're in the present. There's nothing we can point to and say, 'This is the present,' no boundary lines that define the present. All we can say is, 'We are this very moment.' And because there's no way of measuring it, defining it, pinning it down, even seeing what is is, it's immeasurable, boundless, infinite. It's what we are.",
      source: "Everyday Zen, chapter 1: Beginnings",
      category: "Present moment",
      photo:
        "https://www.lionsroar.com/wp-content/uploads/2011/07/Joko-Beck_Michael-Lange440-copy.jpg",
    },
    {
      id: "2",
      title: "Life is already perfect",
      text: "If I were to tell you that your life is already perfect, whole, and complete just as it is, you would think I was crazy. Nobody believes his or her life is perfect. And yet there is something within each of us that basically knows we are boundless, limitless.",
      source: "Everyday Zen, chapter 1: Beginnings",
      category: "Present moment",
      photo:
        "https://miro.medium.com/v2/resize:fit:1400/1*FvenIb-BwdDqhffpuSgMpQ.jpeg",
    },
  ];

  const renderItem = ({ item }: { item: Pills }) => {
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
