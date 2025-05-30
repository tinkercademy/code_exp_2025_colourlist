import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View, Pressable, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import { useState, useEffect } from "react";
import DetailsScreen from "./components/DetailsScreen";

function HomeScreen({ navigation }) {
  const [colours, setColours] = useState([
    // Initial values with 3 colours
    { red: 255, green: 0, blue: 0, key: "1" },
    { red: 0, green: 255, blue: 0, key: "2" },
    { red: 0, green: 0, blue: 255, key: "3" }
  ]);

  function renderItem({ item }) {
    return (
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate('Details', {
              red: item.red,
              green: item.green,
              blue: item.blue
            });
          }}
        >
          <BlockRGB red={item.red} green={item.green} blue={item.blue} />
        </Pressable>
      </View>
    );
  }

  function addColour() {
    setColours([
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        key: Math.random().toString()
      },
      ...colours // Take whatever is there, and "spread" it into this array
    ]);
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={addColour} title="Add colour" />
      ),
    });
  }, [navigation, addColour]);

  return (
    <View style={styles.container}>
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
        <Stack.Screen name="Details" component={DetailsScreen} />
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
