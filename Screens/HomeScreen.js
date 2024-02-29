import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons

const HomeScreen = ({ navigation }) => {
  // Dummy data for demonstration
  const financialOverview = {
    accountBalance: "$10,000",
    totalExpenses: "$1,500",
    investmentPerformance: "+5%",
  };

  const handleLogout = () => {
    // Add logic for user logout
    console.log("Logout button pressed");
    // Navigate to the login screen after logout
    navigation.navigate("Login");
  };

  const handleAddTransaction = () => {
    // Navigate to the transaction form screen
    navigation.navigate("AddTransaction");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back, User!</Text>
      <View style={styles.overviewContainer}>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewLabel}>Account Balance</Text>
          <Text style={styles.overviewValue}>
            {financialOverview.accountBalance}
          </Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewLabel}>Total Expenses (This Month)</Text>
          <Text style={styles.overviewValue}>
            {financialOverview.totalExpenses}
          </Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewLabel}>Investment Performance</Text>
          <Text style={styles.overviewValue}>
            {financialOverview.investmentPerformance}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddTransaction}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Add Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ExpenseTracking")}
        >
          <Ionicons name="cash-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Expense Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Budget")}
        >
          <Ionicons name="wallet-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Transactions")}
        >
          <Ionicons name="list-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Transactions</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content at the top
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40, // Add padding top to create space from the top
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  overviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  overviewItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overviewLabel: {
    fontSize: 16,
    color: "#555",
  },
  overviewValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: "#F44336",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default HomeScreen;
