import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
const {width} =Dimensions.get("screen")

export default function RecomendedCar({place,navigation}) {
  return (
    <ImageBackground
    style={styles.imageCard}
    source={place.image}
    >
    <Text style={{color:"white",fontSize:18,fontWeight:"700"}}>{place.name}</Text>
    <View style={{
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end"
    }}>
    <View style={{flexDirection:"row"}}>
     <Icon name="place" color="white" size={28}/>
     <Text style={{color:"white",fontSize:18,fontWeight:"700"}}>{place.location}</Text>
    </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    imageCard: {
         width:width-40,
         height:200,
         marginRight:20,
         overflow:"hidden",
         borderRadius:10,
         padding:10
    }
})