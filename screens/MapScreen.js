import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const MapScreen = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text>Here is the map</Text>
        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === 'android' ? 25 : 0
      }
})
