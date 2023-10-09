import React, { createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// context
const AuthContext = createContext();

// provider
const AuthProvider = ({ children }) => {
  // global state
  const [state, setState] = React.useState({
    user: null,
    token: "",
  });

//   default axios setting
axios.defaults.baseURL = "http://192.168.43.6:4000/api/v1"

  // initial local storage data
  useEffect(() => {
    // temp func to check localstorege data
    const loadLocalStorageData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      let loginData = JSON.parse(data);
      setState({...state,user:loginData?.user,token:loginData?.token})
    };
    loadLocalStorageData();
  }, []);

  return (
    <AuthContext.Provider value={[state,setState]}>
        {children}
    </AuthContext.Provider>
  )
};

export {AuthContext,AuthProvider}
