import React, {useRef, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrigin, selectDestination, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from "react-native-maps-directions"



const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
      if(!origin || !destination) return;
      // Zoom & fit to markers
      mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top:50, right:50, bottom:50, left:50}
      });
  }, [origin, destination])

  useEffect(() => {
    if(!origin || !destination) return;

     const getTravelTime = async() => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=
      ${destination.description}&key=${process.env.GOOGLE_MAPS_KEY}`)
      .then((res) => res.json())
      .then(data =>{
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
      })
     }
     getTravelTime()
}, [origin, destination, process.env.GOOGLE_MAPS_KEY])


    return (
              <MapView
              ref={mapRef}
              style={tw`flex-1`}
              mapType="mutedStandard"
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}

  >
    {origin && destination &&(
       <MapViewDirections 
       lineDashPattern={[0]}
         origin={origin.description}
         destination={destination.description}
         apikey={process.env.GOOGLE_MAPS_KEY}
         strokeWidth={3}
         strokeColor="blue"
       />
    )}
   {origin?.location && (

       <Marker
        coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
        }}
        title= "Origin"
        description={origin.description}
        identifier= "origin"
       />
   )}

{destination?.location && (

<Marker
 coordinate={{
     latitude: destination.location.lat,
     longitude: destination.location.lng,
 }}
 title= "Destination"
 description={destination.description}
 identifier= "destination"
/>
)}
   </MapView> 
    )
}

export default Map

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === 'android' ? 25 : 0,

      }
})
