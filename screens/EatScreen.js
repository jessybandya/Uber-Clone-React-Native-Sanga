import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const EatScreen = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text>Uber Eats Screen</Text>
        </SafeAreaView>
    )
}

export default EatScreen

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        alignItems: 'center',
        justifyContent: 'center',
      }
})
