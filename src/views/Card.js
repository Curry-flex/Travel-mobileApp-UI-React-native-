import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
const {width} =Dimensions.get("screen")

export default function Card({place,navigation}) {
  return (
   <TouchableOpacity
   activeOpacity={0.8}
   onPress={()=>navigation.navigate("details",place)}
   >
        <ImageBackground
    style={styles.cardImage}
    source={place.image}
    >
      <Text style={{color:"white",fontSize:18,fontWeight:"700"}}>{place.name}</Text>
      <View style={{
          flex:1,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"flex-end"
      }}>
          <View style={{flexDirection:"row"}}>
            <Icon name='place' size={20} color="white" />
            <Text style={{color:"white",marginLeft:5}}>{place.location}</Text>
          </View>
            
          <View style={{flexDirection:"row"}}>
          <Icon name='star' size={20} color="white" />
            <Text style={{color:"white",marginLeft:5}}>5.0</Text>
          </View>

      </View>
    </ImageBackground>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardImage:{
        height:220,
        width:width/2,
        marginRight:20,
        padding:10,
        overflow:"hidden",
        borderRadius:10,
    

    }
})