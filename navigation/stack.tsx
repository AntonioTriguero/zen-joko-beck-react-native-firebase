import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/categories/ExploreScreen";
import PresentMomentScreen from "../screens/categories/PresentMomentScreen";
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
        name="PresentMomentScreen"
        component={PresentMomentScreen}
      />
      <Stack.Screen name="FalseFearsScreen" component={FalseFearsScreen} />
      <Stack.Screen name="BoundariesScreen" component={BoundariesScreen} />
      <Stack.Screen
        name="RelationshipsScreen"
        component={RelationshipsScreen}
      />
      <Stack.Screen name="PillsScreen" component={PillsScreen} />
      {/* <Stack.Screen
        name="AllPillsScreen"
        component={AllPillsScreen}
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
      /> */}
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
