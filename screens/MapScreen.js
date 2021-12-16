import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Map from '../components/Map';
import tw from 'twrnc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigateCard from '../components/navigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <View style={tw`h-full`}>
            <View style={tw`h-1/2`}>
             <Map />
            </View>
            <View style={tw`h-1/2`}>
               <Stack.Navigator>
                   <Stack.Screen
                   name="NavigateCard"
                   component={navigateCard}
                   options={{
                       headerShown: false
                   }}
                   />
               <Stack.Screen
                   name="RideOptions"
                   component={RideOptionsCard}
                   options={{
                       headerShown: false
                   }}
                   />
               </Stack.Navigator>
            </View>
        </View>
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
