import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import AddTransactionScreen from "./Screens/AddTransactionScreen";

const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name='AddTransaction' component={AddTransactionScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
