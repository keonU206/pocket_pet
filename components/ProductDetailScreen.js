import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

//      Component: 용품비교 상세 컴포넌트     //
function ProductDetailScreen({ route }) {
  const { category } = route.params;
  //     Render:     //
  return (
    <View>
      <Text>{category} Product detail Screen</Text>
    </View>
  );
}

export default ProductDetailScreen;
