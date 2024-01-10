import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import PillsList from "./PillsList";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase-database";

const db = getFirestore(app);

interface Pills {
  id: string;
  title: string;
  text: string;
  category: string;
  photo: string;
  source: string;
  read: boolean;
}

const PillsBar = () => {
  const [pills, setPills] = useState<Pills[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<any>();

  const getPills = async () => {
    try {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "pills"));
      const docs = [] as Pills[];
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
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPills();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    getPills();
    setRefreshing(false);
  };

  return (
    <>
      <View style={styles.pillsBox}>
        {/*<Pills bar title />*/}

        {/*LEFT SIDE*/}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("SearchAllPillsScreen")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="book"
              size={20}
              color="#eeeeee"
              style={{ marginRight: 10, paddingTop: 3 }}
            />
            <Text
              style={{
                color: "#eeeeee",
                fontWeight: "bold",
                fontSize: 18,
                fontFamily: "monospace",
              }}
            >
              Zen Pills
            </Text>
          </View>
          {/*RIGHT SIDE*/}

          <AntDesign
            name="right"
            size={20}
            color="#eeeeee"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>

        {/*<PillsList />*/}

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#eeeeee" />
          </View>
        ) : (
          <PillsList
            pills={pills}
            handleRefresh={handleRefresh}
            refreshing={refreshing}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pillsBox: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "transparent",
    marginTop: -2,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 118,
  },
});

export default PillsBar;
