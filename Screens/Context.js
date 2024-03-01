import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TransactionsContext = createContext();

export const useTransactions = () => {
  return useContext(TransactionsContext);
};

export const TransactionsProvider = ({ children }) => {
  const [balance, setbalance] = useState(10000);
  const [transactions, setTransactions] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    // Calculate total expenses whenever transactions change
    const calculateTotalExpenses = () => {
      const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
      // setbalance(balance)
      temp = balance - total;
      setbalance(temp);
      setTotalExpenses(total);
    };

    calculateTotalExpenses();
  }, [transactions]);

  // Load transactions from AsyncStorage on component mount
  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const savedTransactions = await AsyncStorage.getItem("transactions");
        if (savedTransactions !== null) {
          setTransactions(JSON.parse(savedTransactions));
        }
      } catch (error) {
        console.error("Error loading transactions:", error);
      }
    };

    loadTransactions();
  }, []);

  const addTransaction = async (newTransaction) => {
    try {
      // Prepend new transaction
      const updatedTransactions = [newTransaction, ...transactions];
      setTransactions(updatedTransactions);

      // Save updated transactions to AsyncStorage
      await AsyncStorage.setItem(
        "transactions",
        JSON.stringify(updatedTransactions)
      );

      // Calculate total expenses
      const totalExpenses = updatedTransactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      // Save total expenses to AsyncStorage
      await AsyncStorage.setItem("totalExpenses", totalExpenses.toString());
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        totalExpenses,
        setTotalExpenses,
        balance,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};




const BudgetContext = createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(0);

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};


