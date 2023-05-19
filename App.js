import React from "react";
import Scanner from "./screens/Scanner";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack=createStackNavigator()

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Scanner" component={Scanner}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App