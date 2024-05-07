import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
//#     반려동물 종류     //
const categoryData = [
  {
    name: "강아지",
    image: require("../assets/dog.jpg"),
  },
  {
    name: "고양이",
    image: require("../assets/cat.jpg"),
  },
  {
    name: "조류",
    image: require("../assets/bird.jpg"),
  },
  {
    name: "파충류",
    image: require("../assets/reptile.jpg"),
  },
];
//     Component:용품비교 컴포넌트     //
function ProductScreen() {
  //     Variable:네비게이션 변수     //
  const navigation = useNavigation();
  //Event Handler:해당 반려동물 용품상세페이지로 넘어가는 이벤트//
  const handlePress = (categoryName) => {
    navigation.navigate("ProductDetailScreen", { category: categoryName });
  };
  //     Render:     //
  return (
    <View style={styles.view}>
      <Text style={styles.header}>대상</Text>
      <View style={styles.container}>
        {categoryData.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handlePress(category.name)}
          >
            <Image source={category.image} style={styles.image} />
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default ProductScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    width: "45%",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
  },
});
