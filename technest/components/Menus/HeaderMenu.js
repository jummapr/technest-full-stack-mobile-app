import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import MetrialIcons from "react-native-vector-icons/MaterialIcons"

const HeaderMenu = () => {
    const [state,setState] = useContext(AuthContext) ;
    const handleLogout = async() => {
        setState({token: "",user: null});
        await AsyncStorage.removeItem("@auth");
        alert("Logout Successfully")
    }
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>
            <MetrialIcons name='logout' color={"red"} style={styles.iconStyle}/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
      },
      iconStyle: {
        marginBottom: 3,
        alignSelf: "center",
        fontSize: 25,
      },
})