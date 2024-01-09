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
import SearchScreen from "../screens/SearchScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen
        name="AwarenessScreen"
        component={AwarenessScreen}
        options={{ title: "About Awareness" }}
      />
      <Stack.Screen
        name="FalseFearsScreen"
        component={FalseFearsScreen}
        options={{ title: "About Fears" }}
      />
      <Stack.Screen
        name="BoundariesScreen"
        component={BoundariesScreen}
        options={{ title: "About Boundaries" }}
      />
      <Stack.Screen
        name="RelationshipsScreen"
        component={RelationshipsScreen}
        options={{ title: "About Relationships" }}
      />
      <Stack.Screen name="PillsScreen" component={PillsScreen} />
      <Stack.Screen
        name="VideosScreen"
        component={VideosScreen}
        options={{
          headerTitle: (props) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="video-vintage"
                size={24}
                color="#000000"
                style={{ marginRight: 10, paddingBottom: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18 }}>Zen Talks</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: (props) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="book"
                size={20}
                color="#000000"
                style={{ marginRight: 10, paddingTop: 3 }}
              />
              <Text style={{ marginLeft: 10, fontSize: 18 }}>Zen Pills</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
