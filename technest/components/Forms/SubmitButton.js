import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SubmitButton = ({btnName,handleSubmit,loading}) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.btnText}>
            {loading ? 'Please wait...' : btnName}
        </Text>
    </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: "#1e2225",
        height: 50,
        marginHorizontal: 25,
        borderRadius: 80,
        justifyContent: "center",
        marginBottom: 20,

    },
    btnText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "400"
    }
})