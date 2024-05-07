import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//     Component: 홈 화면 컴포넌트     //
function HomeScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>반려동물을</Text>
      <Text style={styles.text}>위한 최고의 선택</Text>
      <Text style={styles.welcomeMessage}>???님 반갑습니다</Text>
      <Image source={require("../assets/dog.jpg")} style={styles.image}></Image>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 32,
    marginTop: 15,
  },
  welcomeMessage: {
    fontSize: 16,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
});
