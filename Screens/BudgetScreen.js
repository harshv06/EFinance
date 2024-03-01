import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useBudget } from './Context';
import { useTransactions } from './Context';

const BudgetScreen = () => {
  const { budget, setBudget } = useBudget();
  const { transactions } = useTransactions();
  const [newBudget, setNewBudget] = useState('');

  // Calculate total expenses
  const totalExpenses = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  // Calculate percentage of expenses compared to the budget
  const expensesPercentage = (totalExpenses / budget) * 100;

  const handleSaveBudget = () => {
    const parsedBudget = parseFloat(newBudget);
    if (!isNaN(parsedBudget)) {
      setBudget(parsedBudget);
      setNewBudget('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget</Text>
      <View style={styles.budgetContainer}>
        <Text style={styles.budgetLabel}>Current Budget:</Text>
        <Text style={styles.budgetValue}>${budget}</Text>
      </View>
      <Text style={styles.expensesText}>Total Expenses: ${totalExpenses}</Text>
      <Text style={styles.expensesPercentageText}>
        Expenses Percentage: {expensesPercentage.toFixed(2)}%
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter New Budget"
        keyboardType="numeric"
        value={newBudget}
        onChangeText={setNewBudget}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveBudget}>
        <Text style={styles.buttonText}>Save Budget</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  budgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  budgetLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  budgetValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  expensesText: {
    fontSize: 16,
    marginBottom: 10,
  },
  expensesPercentageText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#2196F3',
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BudgetScreen;
