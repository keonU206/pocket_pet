import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

//     Component:다이어리 작성 컴포넌트     //
function WriteItem({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //     Event Handler: 저장버튼 누를때 이벤트     //
  const handleSave = () => {
    console.log("Title:", title);
    console.log("Content:", content);
    console.log(`Content : ${content}`);

    navigation.goBack();
  };
  //     Render:     //
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="제목을 입력하세요"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="내용을 입력하세요"
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>저장</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WriteItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
