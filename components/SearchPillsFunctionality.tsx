import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import PillsList from "./PillsList";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase-database";

const db = getFirestore(app);

interface Pill {
  id: string;
  title: string;
  text: string;
  category: string;
  photo: string;
  source: string;
  read: boolean;
}

interface Props {
  topicFilter?: string;
  onlyRead?: boolean;
}

const SearchPillsFunctionality = ({ topicFilter, onlyRead }: Props) => {
  const [pills, setPills] = useState<Pill[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<null | NodeJS.Timeout>(
    null
  );
  const [searchedResults, setSearchedResults] = useState<Pill[]>([]);

  // Get data:

  const getPills = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "pills"));
      const docs = [] as Pill[];
      querySnapshot.forEach((doc) => {
        const { title, text, category, photo, source, read } = doc.data();
        docs.push({
          id: doc.id,
          title,
          text,
          category,
          photo,
          source,
          read,
        });
      });
      setPills(docs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPills();
  }, []);

  // handle refresh:

  const handleRefresh = () => {
    setRefreshing(true);
    getPills();
    setRefreshing(false);
  };

  // First filter by category:
  let filteredPills: Pill[] = [];

  if (topicFilter) {
    filteredPills = pills.filter((pill) => pill.category === topicFilter);
  } else if (onlyRead) {
    filteredPills = pills.filter((pill) => pill.read === true);
  } else {
    filteredPills = pills;
  }
  // Search filter:

  const filterPills = (searchtext: string) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return filteredPills.filter(
      (pill) =>
        regex.test(pill.title) ||
        regex.test(pill.text) ||
        regex.test(pill.category) ||
        regex.test(pill.source)
    );
  };

  // Input change:

  const handleSearchChange = (value: string) => {
    clearTimeout(searchTimeout!); // clear any previous timeout
    setSearchText(value);

    // debounce method:

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPills(value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  // The purpose of the debounce method is to delay the execution of the search filter logic until the user stops typing or pauses for a certain duration (in this case, 500 milliseconds). This helps reduce unnecessary filtering and improves performance.

  return (
    <>
      <View style={{ backgroundColor: "#000000", flex: 1 }}>
        {/* Search bar */}
        <View style={styles.searchBox}>
          <View style={styles.inputBox}>
            <Feather
              name="search"
              size={20}
              color="white"
              style={{ marginRight: 10, paddingTop: 3 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Search Topic"
              value={searchText}
              onChangeText={handleSearchChange}
              placeholderTextColor="#eeeeee"
            />
          </View>
        </View>

        <View style={styles.container}>
          {searchText ? (
            <PillsList
              pills={searchedResults}
              forScreen
              handleRefresh={handleRefresh}
              refreshing={refreshing}
            />
          ) : (
            <PillsList
              pills={filteredPills}
              forScreen
              handleRefresh={handleRefresh}
              refreshing={refreshing}
            />
          )}
        </View>
      </View>
    </>
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
  inputBox: {
    backgroundColor: "#242424",
    padding: 5,
    flexDirection: "row",
  },
  searchBox: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 5,
    justifyContent: "center",
  },
  input: {
    color: "#eeeeee",
  },
});

export default SearchPillsFunctionality;
