import { View, Text } from "react-native";
import React from "react";
import Welcome from "./Screens/Welcome";
import FormLogin from "./Screens/FormLogin";
import FormRegister from "./Screens/FromRegister";
import FoodList from "./Screens/FoodList";
import FoodItems from "./Screens/FoodList/FoodItems";
import ProductGrid from "./Screens/ProductGrid";
import Setting from "./Screens/setting";
import UiTabs from "./Navigation/UiTabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const screenOptionsMenu = (router) => {
  return {};
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Welcome"} component={Welcome} />
        <Stack.Screen name={"FormLogin"} component={FormLogin} />
        <Stack.Screen name={"FormRegister"} component={FormRegister} />
        <Stack.Screen name={"UiTabs"} component={UiTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
