import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from "@react-navigation/native"

const navigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Hello, Jessy Bandya</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                 <GooglePlacesAutocomplete
                 style={toInputBoxStyles}
                 placeholder="where to?"
                 fetchDetails={true}
                 returnKeyType={"search"}
                 minLength={2}
                 onPress={(data, details = null) => {
                   dispatch(setDestination({
                       location: details.geometry.location,
                       description: data.description,
                   })
                   )
                   navigation.navigate("RideOptions")
                 }}
                 query={{
                     key: process.env.GOOGLE_MAPS_KEY,
                     language: "en"
                 }}
                 enablePoweredByContainer={false}
                 nearbyPlacesAPI="GooglePlacesSearch"
                 debounce={400}
                 />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default navigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})