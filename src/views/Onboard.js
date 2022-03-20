import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../color/color'

export default function Onboard({navigation}) {
  return (
    <View style={{flex:1}}>
        <StatusBar  translucent backgroundColor="rgba(0,0,0,0)"/>
    <ImageBackground
    style={{flex:1}}
    source={require("../assets/onboardImage.jpg")}
    >
    <View style={styles.details}>
     <Text style={{color:Colors.white,fontSize:30,fontWeight:"bold",marginBottom:10}}>Discover</Text>
     <Text style={{color:Colors.white,fontSize:30,fontWeight:"bold",marginBottom:10}}>world with us</Text>
     <Text style={{color:Colors.white,fontSize:16,marginTop:20,lineHeight:25}}>There are so many attractive places around the world here are the beautiful places 
     with amaizing scenery where you can enjoy with your family</Text>

     <TouchableOpacity
      style={{
          marginTop:20,
          width:150,
          height:70,
          backgroundColor:Colors.white,
          borderRadius:15,
          alignItems:"center",
          justifyContent:"center"
      }}
     onPress={()=>navigation.navigate("home")}
     >
       <Text style={{color:Colors.dark,fontSize:20,fontWeight:"bold"}}>Get started</Text>
     </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    details:{
        height:"50%",
        bottom:0,
        position:"absolute",
        paddingHorizontal:20

    }
})