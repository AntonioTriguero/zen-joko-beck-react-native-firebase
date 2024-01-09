import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/categories/ExploreScreen";
import AwarenessScreen from "../screens/categories/AwarenessScreen";
import FalseFearsScreen from "../screens/categories/FalseFearsScreen";
import BoundariesScreen from "../screens/categories/BoundariesScreen";
import RelationshipsScreen from "../screens/categories/RelationshipsScreen";
import HomeScreen from "../screens/HomeScreen";
import PillsScreen from "../screens/PillsScreen";
import VideosScreen from "../screens/VideosScreen";
import SearchAllPillsScreen from "../screens/SearchAllPillsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: "Joko Beck Zen Teachings",
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#eeeeee",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
            fontFamily: "monospace",
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{ title: "Explore Topics" }}
      />
      <Stack.Screen
        name="AwarenessScreen"
        component={AwarenessScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="book"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10, paddingTop: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18, color: "#eeeeee" }}>
                About Awareness
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
        }}
      />
      <Stack.Screen
        name="FalseFearsScreen"
        component={FalseFearsScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="book"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10, paddingTop: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18, color: "#eeeeee" }}>
                About fears
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
        }}
      />
      <Stack.Screen
        name="BoundariesScreen"
        component={BoundariesScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="book"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10, paddingTop: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18, color: "#eeeeee" }}>
                About Boundaries
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
        }}
      />
      <Stack.Screen
        name="RelationshipsScreen"
        component={RelationshipsScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="book"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10, paddingTop: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18, color: "#eeeeee" }}>
                About Relationships
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
        }}
      />
      <Stack.Screen
        name="PillsScreen"
        component={PillsScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="book"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10, paddingTop: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18, color: "#eeeeee" }}>
                Zen Pill Reading
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
        }}
      />
      <Stack.Screen
        name="VideosScreen"
        component={VideosScreen}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="video-vintage"
                size={24}
                color="#eeeeee"
                style={{ marginRight: 10, paddingBottom: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18, color: "#eeeeee" }}>
                Zen Talks
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
        }}
      />
      <Stack.Screen
        name="SearchAllPillsScreen"
        component={SearchAllPillsScreen}
        options={{
          headerTitle: (props) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="book"
                size={20}
                color="#eeeeee"
                style={{ marginRight: 10, paddingTop: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18, color: "#eeeeee" }}>
                Zen Pills
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
        }}
      />
    </Stack.Navigator>
  );
};
