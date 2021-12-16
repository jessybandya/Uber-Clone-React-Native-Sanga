import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements"
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native"
const data = [
  {
    id: "1",
    title:"Get a ride",
    image: "https://i.dlpng.com/static/png/6453338_preview.png",
    screen: "MapScreen"
  },{
    id: "2",
    title:"Order food",
    image: "https://assets-global.website-files.com/5ae17eb10974c57415c53e4b/5df06e845613ce102d579b30_Restauranteurs%20are%20to%20Blame%20for%20the%20%E2%80%98Uber%20Eats%20Apocalypse%E2%80%99_002060.png",
    screen: "EatScreen"
  }
]
const NavOptions = () => {
  const navigation = useNavigation()
  return (
    <FlatList 
      data={data}
      horizontal
      keyExtractor={( item ) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
        style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        onPress={() => navigation.navigate(item.screen)}
        >
            <View>
              <Image
              style={{ width:120, height: 120, resizeMode: "contain"}}
              source={{
                uri: item.image
              }}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright" color="white" type="antdesign"/>
            </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({

});

export default NavOptions;