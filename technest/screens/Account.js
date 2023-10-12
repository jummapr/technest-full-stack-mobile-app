import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';
import FooterMenu from '../components/Menus/FooterMenu';

const Account = () => {
    const [state,setState] = useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text>Account</Text>
        <Text>{state.user.name}</Text>
        <FooterMenu />
      </View>
    )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 10,
    justifyContent: 'space-between',
    marginTop: 40,
 }
});