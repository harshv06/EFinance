import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Platform,
  SafeAreaView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";
import { useTransactions } from "./Context"; 


const AddTransactionScreen = ({ navigation }) => {
  const categories = [
    "Food",
    "Travel",
    "Shopping",
    "Entertainment",
    "Others",
    "Bills",
  ];
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [showTimePicker, setShowTimePicker] = useState(true);

  const { addTransaction } = useTransactions();

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios"); // Hide date picker on iOS after selection
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(Platform.OS === "ios"); // Hide time picker on iOS after selection
    setDate(currentTime);
  };

  const handleSaveTransaction = () => {
    // Add logic to save transaction
    console.log("Amount:", amount);
    console.log("Category:", category);
    console.log("Date:", date);
    // Navigate back to home screen after saving transaction
    const newTransaction={
      id: Date.now(),   // Using current timestamp as the unique identifier
      amount: parseFloat(amount), // Convert amount to a number
      category,
      date,
    }
    addTransaction(newTransaction);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "90%", alignItems: "center" }}>
        <Text style={styles.title}>Add Transaction</Text>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <SelectDropdown
          buttonTextStyle={{ color: "gray" }}
          defaultButtonText="Select Category"
          dropdownIconPosition="right"
          dropdownStyle={{ padding: 5, marginTop: 10, borderRadius: 10 }}
          showsVerticalScrollIndicator={false}
          buttonStyle={{
            width: "100%",
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
          data={categories}
          onSelect={(selectedItem, index) => {
            setCategory(selectedItem);
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        {/* {date !== new Date() && (
        <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      )} */}
        <View style={{ gap: 10, alignItems: "center" }}>
          {showDatePicker && (
            <DateTimePicker
              testID="datePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}
          {/* {date !== new Date() && (
        <Button title="Select Time" onPress={() => setShowTimePicker(true)} />
      )} */}
          {showTimePicker && (
            <DateTimePicker
              testID="timePicker"
              value={date}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleTimeChange}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveTransaction}
        >
          <Text style={styles.buttonText}>Save Transaction</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#2196F3",
    width: "100%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default AddTransactionScreen;
