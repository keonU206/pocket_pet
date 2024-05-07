import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//     Component:DetailScreen Compontnt(용퓸비교)     //
const DetailScreen = ({ route }) => {
  //     Variable:파라미터 받아오는 변수      //
  const { title } = route.params;
  //     Render:     //
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>
        여기에 해당 아이템의 상세 내용을 표시할 수 있습니다.
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => console.log("수정버튼 눌림")}
          >
            수정
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("삭제버튼 눌림")}
        >
          <Text style={styles.buttonText}>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default DetailScreen;
