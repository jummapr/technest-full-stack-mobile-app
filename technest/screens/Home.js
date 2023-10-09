import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import FooterMenu from '../components/Menus/FooterMenu';

const Home = () => {
    // global state
    const [state,setState] = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{JSON.stringify(state,null,4)}</Text>
      <FooterMenu />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin: 10,
        justifyContent: 'space-between',
        marginTop: 40,
        
    }
});
export default Home
