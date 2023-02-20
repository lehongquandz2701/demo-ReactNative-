import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import FoodList from "../Screens/FoodList";
import Setting from "../Screens/setting";
import ProductGrid from "../Screens/ProductGrid";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const screenOptionsMenu = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: "red",
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = "shopping-cart";
    if (route.name === "ProductGrid") {
      iconName = "shopping-cart";
    } else if (route.name === "FoodList") {
      iconName = "utensils";
    } else if (route.name === "Setting") {
      iconName = "wrench";
    }

    return (
      <FontAwesome5
        name={iconName}
        size={20}
        color={focused ? "red" : "#999"}
      />
    );
  },
});
const UiTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionsMenu}>
      <Tab.Screen name={"ProductGrid"} component={ProductGrid} />
      <Tab.Screen name={"FoodList"} component={FoodList} />
      <Tab.Screen name={"Setting"} component={Setting} />
    </Tab.Navigator>
  );
};

export default UiTabs;
