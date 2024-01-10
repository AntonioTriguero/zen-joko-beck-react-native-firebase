import { useRoute } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Share,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import app from "../firebase-database";
import { useState, useEffect } from "react";

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

const PillsScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { id, title, text, category, photo, source, read } =
    route.params as Pills;

  // Share with other mobile apps:

  const sharePost = () => {
    Share.share({
      message: `Check out this text about Zen by Joko Beck on ${category}: \n\n ${title.toUpperCase()} \n\n${text}`,
      title: "Joko Beck Zen Teachings",
    });
  };

  // Handle read button

  const toggleReadBoolean = async (id: string) => {
    try {
      const docRef = doc(db, "pills", id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const { read } = docSnapshot.data() as Pills;
        await updateDoc(docRef, { read: !read });
        if (!read) {
          Alert.alert(
            "Pill added.",
            "We hope you enjoyed it! Now you will see this pill in your 'read pills' list.",
            [
              {
                text: "Ok",
                style: "cancel",
              },
              {
                text: "See my pills",
                style: "destructive",
                onPress: () => {
                  navigation.navigate("AlreadyReadPillsScreen");
                },
              },
            ],
            { cancelable: true }
          );
        } else {
          Alert.alert(
            "Pill removed.",
            "This pill has been removed from your 'read pills' list.",
            [
              {
                text: "Ok",
                style: "cancel",
              },
              {
                text: "See my pills",
                style: "destructive",
                onPress: () => {
                  navigation.navigate("AlreadyReadPillsScreen");
                },
              },
            ],
            { cancelable: true }
          );
        }

        navigation.navigate("PillsScreen", {
          id,
          title,
          text,
          photo,
          category,
          source,
          read,
        });
        navigation.navigate("PillsScreen", {
          id,
          title,
          text,
          photo,
          category,
          source,
          read,
        });
      } else {
        Alert.alert("Document not found.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("An error occurred.");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/*HEADER*/}

          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            {/*Image */}

            <View style={{ width: "50%", alignItems: "center" }}>
              <Image
                style={{ width: "100%", height: 180, resizeMode: "cover" }}
                source={{ uri: photo }}
              />
            </View>

            {/*Title & button right side*/}

            <View style={{ width: "50%" }}>
              {/*Title */}
              <View
                style={{
                  width: "80%",
                  flex: 1,
                  marginLeft: 20,
                  flexWrap: "wrap",
                }}
              >
                <Text style={styles.title}>{title}</Text>
                <Text style={{ color: "#eeeeee", fontSize: 12 }}>
                  by Joko Beck
                </Text>
              </View>

              {/*Button & share icon */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "space-between",
                }}
              >
                {/*button*/}
                <View style={{ flex: 3 }}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      { backgroundColor: read === true ? "#1b5a67" : "000" },
                    ]}
                    onPress={() => toggleReadBoolean(id)}
                  >
                    <Text
                      style={{
                        color: "#eeeeee",
                        fontSize: 12,
                      }}
                    >
                      Read
                    </Text>
                  </TouchableOpacity>
                </View>
                {/*share icon*/}
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-start",
                    marginLeft: -30,
                  }}
                >
                  <Feather
                    name="share-2"
                    size={24}
                    color="#eeeeee"
                    onPress={sharePost}
                  />
                </View>
              </View>
            </View>
          </View>

          {/*Info */}

          <View style={styles.textBox}>
            {/*Category */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
              onPress={() => {
                if (category === "false fears") {
                  navigation.navigate("FalseFearsScreen");
                } else if (category === "boundaries") {
                  navigation.navigate("BoundariesScreen");
                } else if (category === "awareness") {
                  navigation.navigate("AwarenessScreen");
                } else if (category === "relationships") {
                  navigation.navigate("RelationshipsScreen");
                }
              }}
            >
              <Text style={{ color: "#eeeeee", fontSize: 16 }}>Category: </Text>
              <Text
                style={{
                  flexWrap: "wrap",
                  width: "80%",
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#3fafc7",
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Text>
            </TouchableOpacity>

            {/*Source */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#eeeeee",
                  fontSize: 16,
                  flex: 1,
                }}
              >
                Source:{" "}
              </Text>
              <Text
                style={{
                  flexWrap: "wrap",
                  width: "80%",
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#eeeeee",
                }}
              >
                {source}
              </Text>
            </View>
          </View>

          {/*Reading */}

          <View style={styles.textBox}>
            <Text style={[styles.subTitle, { marginVertical: 10 }]}>
              Reading
            </Text>
            <Text style={{ color: "#eeeeee", fontSize: 16, lineHeight: 24 }}>
              {text}
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#eeeeee",
    width: "100%",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#eeeeee",
  },
  textBox: {
    backgroundColor: "#242424",
    padding: 20,
    marginBottom: 20,
  },
  button: {
    borderColor: "#eeeeee",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    marginLeft: 20,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});

export default PillsScreen;
