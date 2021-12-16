import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import tw from 'twrnc';
import NavOptions from "../components/NavOptions"
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-black`,styles.safeAreaView}>
    <View style={tw`p-5`}>
        <Image 
        style={{
            width: 100, height: 100, resizeMode: "contain"
        }}
        source={{
            uri: "https://icons-for-free.com/iconfiles/png/512/uber-1324440247504689178.png",
        }}
        />
        <NavOptions />
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