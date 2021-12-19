import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import tw from 'twrnc';
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import "intl";
import "intl/locale-data/jsonp/en";

const data = [
    {
        id: "1",
        title:"UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png"
    },{
        id: "2",
        title:"Uber XL",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png"
    },
    {
        id: "3",
        title:"Uber LUX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png"
    },
]

const SURGE_CHARGE_RATE = 1.5;
const RideOptionsCard = ({ navigation }) => {
    // const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    return (
        <View style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity  style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")}>
            <Text style={tw`text-center py-5 text-xl`}>Select a Ride = {travelTimeInformation?.distance?.text}</Text>
            </TouchableOpacity>
            </View>
            <FlatList data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item: {id, title, multiplier, image}, item }) => (
             <TouchableOpacity onPress={() => setSelected(item)} style={tw`flex-row items-center justify-between px-0 h-20 ${id === selected?.id && "bg-gray-200"}`}>
                 <Image
                 style={{
                     width: 100,
                     height: 100,
                     resizeMode:"contain"
                 }}
                 source={{ uri: image }}
                 />
                 <View style={tw`-ml-6`}>
                     <Text style={tw`text-xl font-semibold`}>{title}</Text>
                     <Text>{travelTimeInformation?.duration?.text}</Text>
                 </View>
                 <Text style={tw`text-xl`}>

                     {new Intl.NumberFormat('en-gb', {
                         style: "currency",
                         currency: "KSH"
                     }).format(

                        (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier / 100)
                     )}
                 </Text>
             </TouchableOpacity>
            )}
            />

            <View>
            <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})