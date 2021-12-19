import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from "@react-navigation/native"
import NavFavourites from './NavFavourites';
import { Icon } from "react-native-elements"


const navigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Hello, Jessy Bandya</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                <GooglePlacesAutocomplete
            
        placeholder="Where to?"
        fetchDetails={true}
        styles={{
            container: {
                flex: 0,
                backgroundColor:"#DDDDDF",
                padding:5
            }
        }}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
            dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
            })
            )
            navigation.navigate("RideOptions")
          }}
        returnKeyType={"search"}
        query={{
            key: process.env.GOOGLE_MAPS_KEY,
            language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        />
                </View>

              <NavFavourites/>  
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
               <TouchableOpacity
               onPress={() => navigation.navigate("RideOptions")}
               style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                   <Icon name="car" type="font-awesome" color="white" size={16}/>
                   <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={tw`flex flex-row justify-between  w-24 px-4 py-3 rounded-full`}>
                   <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                   <Text style={tw`text-black text-center`}>Eats</Text>
                </TouchableOpacity> 
            </View>
        </SafeAreaView>
    )
}

export default navigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        paddingTop: 20,
    },
    textInput: {
        backgroundColor: "red",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})