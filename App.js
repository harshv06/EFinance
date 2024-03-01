import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./Navigator";
import {
  BudgetProvider,
  BudgetTrackingProvider,
  TotalExpensesProvider,
  TransactionsProvider,
} from "./Screens/Context";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TransactionsProvider>
        <BudgetProvider>
          <Navigator />
        </BudgetProvider>
      </TransactionsProvider>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
