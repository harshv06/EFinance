import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const TotalExpensesContext = createContext();
const BudgetTrackingContext = createContext();

export const useBudgetTracking = () => {
  return useContext(BudgetTrackingContext);
};

export const BudgetTrackingProvider = ({ children }) => {
  const [budget, setBudget] = useState(0);

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  return (
    <BudgetTrackingContext.Provider value={{ budget, updateBudget }}>
      {children}
    </BudgetTrackingContext.Provider>
  );
};

export const useTotalExpenses = () => {
  return useContext(TotalExpensesContext);
};

export const TotalExpensesProvider = ({ children }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  useEffect(() => {
    // Load total expenses from AsyncStorage when the app starts
    const loadTotalExpenses = async () => {
      try {
        const savedTotalExpenses = await AsyncStorage.getItem("totalExpenses");
        if (savedTotalExpenses !== null) {
          setTotalExpenses(parseFloat(savedTotalExpenses));
        }
      } catch (error) {
        console.error("Error loading total expenses from AsyncStorage:", error);
      }
    };

    loadTotalExpenses();
  }, []);

  const updateTotalExpenses = async (newTotal) => {
    try {
      // Update total expenses in state
      setTotalExpenses(newTotal);
      // Update total expenses in AsyncStorage
      await AsyncStorage.setItem("totalExpenses", newTotal.toString());
    } catch (error) {
      console.error("Error updating total expenses in AsyncStorage:", error);
    }
  };

  return (
    <TotalExpensesContext.Provider
      value={{ totalExpenses, updateTotalExpenses }}
    >
      {children}
    </TotalExpensesContext.Provider>
  );
};



const TransactionsContext = createContext();

export const useTransactions = () => {
  return useContext(TransactionsContext);
};

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};