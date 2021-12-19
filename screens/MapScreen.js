import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity } from 'react-native'
import Map from '../components/Map';
import tw from 'twrnc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigateCard from '../components/navigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from "react-native-elements/dist/icons/Icon"
import { useNavigation } from '@react-navigation/native';
const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation()
    return (
        <View >
            <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={tw`absolute top-10 left-2 z-60 p-3 rounded-full shadow-lg bg-gray-100`}
            >
             <Icon name="menu" />
            </TouchableOpacity>
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
