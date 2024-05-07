import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  ProductScreen,
  MapScreen,
  DiaryScreen,
} from "../components";
import { Ionicons } from "@expo/vector-icons";

//     Variable: 네비게이션 변수     //
const Tab = createBottomTabNavigator();

//     Component: MainConponent     //
function MainScreen() {
  //     Render:     /.
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Message") {
            iconName = focused ? "book" : "book-outline";
          }

          // 아이콘을 렌더링합니다.
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
        }}
      />
      <Tab.Screen
        name="Search"
        component={ProductScreen}
        options={{
          title: "용품비교",
        }}
      />
      <Tab.Screen
        name="Notification"
        component={MapScreen}
        options={{
          title: "병원알림",
        }}
      />
      <Tab.Screen
        name="Message"
        component={DiaryScreen}
        options={{
          title: "다이어리",
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
