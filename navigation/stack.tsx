import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/categories/ExploreScreen";
import AwarenessScreen from "../screens/categories/AwarenessScreen";
import FalseFearsScreen from "../screens/categories/FalseFearsScreen";
import BoundariesScreen from "../screens/categories/BoundariesScreen";
import RelationshipsScreen from "../screens/categories/RelationshipsScreen";
import AlreadyReadPillsScreen from "../screens/categories/AlreadyReadPillsScreen";
import HomeScreen from "../screens/HomeScreen";
import PillsScreen from "../screens/PillsScreen";
import VideosScreen from "../screens/VideosScreen";
import SearchAllPillsScreen from "../screens/SearchAllPillsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation<any>();

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
        options={{
          title: "Explore Topics",
          headerRight: () => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#000"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="AwarenessScreen"
        component={AwarenessScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, color: "#eeeeee" }}>
              About Awareness
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
          headerRight: () => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="AlreadyReadPillsScreen"
        component={AlreadyReadPillsScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, color: "#eeeeee" }}>
              'Read Pills' List
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
          headerRight: () => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="FalseFearsScreen"
        component={FalseFearsScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, color: "#eeeeee" }}>About fears</Text>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
          headerRight: () => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="BoundariesScreen"
        component={BoundariesScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, color: "#eeeeee" }}>
              About Boundaries
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
          headerRight: () => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="RelationshipsScreen"
        component={RelationshipsScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, color: "#eeeeee" }}>
              About Relationships
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
          headerRight: () => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PillsScreen"
        component={PillsScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 18, color: "#eeeeee" }}>
              Zen Pill Reading
            </Text>
          ),
          headerStyle: {
            backgroundColor: "#1b5a67",
          },
          headerTintColor: "#eeeeee", // the back arrow
          headerRight: () => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
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
          headerRight: () => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color="#eeeeee"
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
