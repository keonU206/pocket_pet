import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//     Component:다이어리 컴포넌트     //
function DiaryScreen({ navigation }) {
  //     Event Handler:상세페이지 컴포넌트로 이동     //
  const handleItemPress = (itemTitle) => {
    navigation.navigate("Detail", { title: itemTitle });
  };

  //     Event Handler:작성 컴포넌트로 이동     //
  const handleAddItem = () => {
    navigation.navigate("WriteItem");
  };
  //     Render:     //
  return (
    <View style={styles.view}>
      <ScrollView>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목1")}
        >
          <Text style={styles.title}>제목1</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목2")}
        >
          <Text style={styles.title}>제목2</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleItemPress("제목3")}
        >
          <Text style={styles.title}>제목3</Text>
          <Text style={styles.date}>2024-04-05</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleAddItem()}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DiaryScreen;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    padding: 20,
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  item: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  // 쓰기 버튼 스타일
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007AFF",
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
