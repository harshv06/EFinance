import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import AddTransactionScreen from "./Screens/AddTransactionScreen";
import ExpenseTrackingScreen from "./Screens/ExpenseTrackingScreen";
import BudgetScreen from "./Screens/BudgetScreen";
import TransactionScreen from "./Screens/TransactionScreen";

const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name='AddTransaction' component={AddTransactionScreen} options={{headerShown:false}} />
            <Stack.Screen name='ExpenseTracking' component={ExpenseTrackingScreen} options={{headerShown:false}} />
            <Stack.Screen name='Budget' component={BudgetScreen} options={{headerShown:false}} />
            <Stack.Screen name='Transaction' component={TransactionScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
