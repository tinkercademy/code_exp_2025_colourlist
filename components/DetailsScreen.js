import React from "react";
import { View, Text } from "react-native";

export default function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: `rgb(${red},${green},${blue})`,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Red: {red}</Text>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Green: {green}</Text>
      <Text style={{ fontSize: 22 }}>Blue: {blue}</Text>
    </View>
  );
} 