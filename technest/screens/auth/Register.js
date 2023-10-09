import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import axios from "axios";

const Register = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async() => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please Fill all the fields.");
        setLoading(false);
        return;
      }
      setLoading(false);
      const {data} = await axios.post('/register', {
        name,email,password
      });

      alert(data && data.message);

      navigation.navigate("Login")
    } catch (error) {
      alert(error.response.data.message)
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          title={"Name"}
          SecureEntry={false}
          value={name}
          setValue={setName}
        />
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
        btnName={"Register"}
        loading={loading}
      />
      <Text style={styles.linkText}>Already registered Please <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Login</Text></Text>
    </View>
  );
};

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
    color: "red"
  }
});

export default Register;
