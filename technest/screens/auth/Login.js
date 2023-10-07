import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async() => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill all the fields.");
        setLoading(false);
        return;
      }
      setLoading(false);
      const {data} = await axios.post('http://192.168.43.6:4000/api/v1/login', {
        email,password
      });

      alert(data && data.message);
      await AsyncStorage.setItem('@auth', JSON.stringify(data));
    } catch (error) {
      alert(error.response.data.message)
      setLoading(false);
      console.log(error);
    }
  };

  // temp func to check localstorege data
  const getLocalStorage = async() => {
    let data = await AsyncStorage.getItem("@auth");
    console.log(data)
  }
  getLocalStorage();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
       
        <InputBox
          title={"Email"}
          SecureEntry={false}
          keyBoardType={"email-address"}
          autoComplete={"email"}
          value={email}
          setValue={setEmail}
        />
        <InputBox
          title={"Password"}
          type={"password"}
          SecureEntry={true}
          autoComplete={"password"}
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton
        handleSubmit={handleSubmit}
        btnName={"Login"}
        loading={loading}
      />
      <Text style={styles.linkText}>
        if you don't have account <Text onPress={() => navigation.navigate('Register')} style={styles.link}>Register</Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
  linkText: {
    fontSize: 17,
    textAlign: "center",
  },
  link: {
    color: "red",
  },
});
