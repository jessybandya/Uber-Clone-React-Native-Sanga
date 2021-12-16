import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import tw from 'twrnc';
import NavOptions from "../components/NavOptions"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from "react-redux"
import { setDestination, setOrigin } from "../slices/navSlice"


const HomeScreen = () => {

   const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <View style={tw`p-5`}>
        <Image
        style={{
            width:100, 
            height:100, 
            resizeMode:"contain"
        }}
         source={{
            uri:"https://icons-for-free.com/iconfiles/png/512/uber-1324440247504689178.png",
        }}/>
        <GooglePlacesAutocomplete
        placeholder="Where From?"
        fetchDetails={true}
        styles={{
            container: {
                flex: 0,
            },
            textInput: {
                fontSize: 18
            }
        }}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
           dispatch(setOrigin({
               location:details.geometry.location,
               description: data.description
           }))
           dispatch(setDestination(null))
        // console.log(details)
        }}
        returnKeyType={"search"}
        query={{
            key: process.env.GOOGLE_MAPS_KEY,
            language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        />
        <NavOptions/>
    </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? 18 : 0
  },
  text: {
    fontSize: 25,
    fontWeight: '500'
  }
});

export default HomeScreen;