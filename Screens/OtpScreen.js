import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useNavigation } from "@react-navigation/native";

const OtpScreen = ({ route }) => {
  const navigation = useNavigation();
  const [actualCode, setActualCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const { udata } = route.params;
  useEffect(() => {
    setActualCode(udata.verificationCode);
  }, []);

  const checkCode = (code) => {
    if (code == actualCode) {
      const user = {
        name: udata.name,
        email: udata.email,
        mobile: udata.mobile,
        password: udata.password,
      };

      fetch("http://192.168.0.105:4000/v1/signUp/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.Error) {
            Alert.alert("Failed", data.Error, [{ text: "Ok" }]);
            return;
          } else {
            Alert.alert("Success", "Registration Done", [
              {
                text: "Ok",
                onPress: () => {
                  navigation.navigate("Login");
                },
              },
            ]);
          }
        });
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Verify yourself</Text>
        <OTPInputView
          style={{ width: "90%", height: 100, alignSelf: "center" }}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            checkCode(code);
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
