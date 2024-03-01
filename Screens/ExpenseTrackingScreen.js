import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTransactions } from "./Context";

const ExpenseTrackingScreen = () => {
  const navigation = useNavigation();
  const { transactions } = useTransactions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracking</Text>
      {/* <Button
        title="Add Transaction"
        onPress={() => navigation.navigate("AddTransaction")}
      /> */}
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Category: {item.category}</Text>
            <Text style={styles.itemText}>Amount: ${item.amount}</Text>
            {item.date && (
              <Text style={styles.itemText}>Date: {item.date.toString()}</Text>
            )}
            {item.time && (
              <Text style={styles.itemText}>Time: {item.time.toString()}</Text>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  list: {
    flex: 1,
    width: "100%",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ExpenseTrackingScreen;
