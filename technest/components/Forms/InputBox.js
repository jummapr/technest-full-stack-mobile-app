import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const InputBox = ({ title, type,keyBoardType,autoComplete,SecureEntry=false,value,setValue }) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        textContentType={type}
        autoCorrect={false}
        keyboardType={keyBoardType}
        autoComplete={autoComplete}
        style={styles.inputBox}
        placeholder={title}
        secureTextEntry={SecureEntry}
        value={value}
        onChangeText={(e) => setValue(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
});

export default InputBox;
