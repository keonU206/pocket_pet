import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen";
import {
  DiaryScreen,
  DetailScreen,
  WriteItem,
  ProductDetailScreen,
} from "./components/index";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "ProcketPet" }}
        />
        <Stack.Screen name="Diary" component={DiaryScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen
          name="WriteItem"
          component={WriteItem}
          options={{ title: "다이어리 작성" }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{ title: "동물용품" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
