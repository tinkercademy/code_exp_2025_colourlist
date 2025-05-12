import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import { useState } from "react";

function HomeScreen() {
  const [colours, setColours] = useState([]);

  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  function addColour() {
    setColours([
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: colours.length
      },
      ...colours // Take whatever is there, and "spread" it into this array
    ]);
  }

  return (
    <View style={styles.container}>
      <Button onPress={addColour} title="Add colour" />
      <FlatList
        style={{ width: "100%" }}
        data={colours}
        renderItem={renderItem}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top"
  }
});
