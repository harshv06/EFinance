import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./Navigator";
import {
  BudgetTrackingProvider,
  TotalExpensesProvider,
  TransactionsProvider,
} from "./Screens/Context";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TransactionsProvider>
        <TotalExpensesProvider>
          <Navigator />
        </TotalExpensesProvider>
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
