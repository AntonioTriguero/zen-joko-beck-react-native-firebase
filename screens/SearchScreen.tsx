import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import SearchPillsList from "../components/SearchPillsList";
import { pills } from "../data/pillsData";
import PillsList from "../components/PillsList";

export interface Pill {
  id: string;
  title: string;
  text: string;
  photo: string;
  category: string;
  source: string;
}

const SearchScreen = () => {
  // Search states

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<null | NodeJS.Timeout>(
    null
  );
  const [searchedResults, setSearchedResults] = useState<Pill[]>([]);

  // Search filter:

  const filterPills = (searchtext: string) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return pills.filter(
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
            <PillsList pills={searchedResults} forScreen />
          ) : (
            <PillsList pills={pills} forScreen />
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
    paddingTop: 10,
    paddingBottom: 5,
    justifyContent: "center",
  },
  input: {
    color: "#eeeeee",
  },
});

export default SearchScreen;
