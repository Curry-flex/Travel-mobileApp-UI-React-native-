import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import Colors from '../color/color'

export default function Details({route,navigation}) {
  const place =route.params
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <StatusBar translucent  backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
       style={{
         flex:0.7
       }}
       source={place.image}
      >
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={30} color="white" onPress={()=>navigation.goBack( )} />
        <Icon name="more-vert" size={30} color="white" />
      </View>

      <View style={styles.imageDetails}>
        <Text style={{fontSize:25,fontWeight:"bold",width:"70%",marginBottom:20,color:"white "}}>{place.name}</Text>

        <View style={{flexDirection:'row'}}>
         <Icon name="star" size={30} color="orange" />
         <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginLeft:5}}>5.0</Text>
        </View>
      </View>
      </ImageBackground>
      <View style={styles.detailContainer}>
       <View style={styles.iconContainer}>
         <Icon name="favorite" color="red" size={30}/>
       </View>

       <View style={{
         flexDirection:"row"
       }}>
        <Icon name="place" size={30} color={Colors.primary} />
        <Text style={{color:Colors.primary ,fontSize:20,fontWeight:"bold",marginLeft:3}}>{place.name}</Text>
       </View>

       <Text style={{color:"black",fontSize:20,fontWeight:"bold",marginVertical:20}}>About place</Text>
       <Text style={{color:"black",lineHeight:20}}>{place.details}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{color:"white",fontWeight:"bold"}}>Tsh-700000</Text>
        <TouchableOpacity
         style={styles.button}
         activeOpacity={0.7}
        >
          <Text style={{color:Colors.primary,fontWeight:"bold",fontSize:16}}>Book now</Text>
        </TouchableOpacity>
      </View>   
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    height:60,
    width:60,
    borderRadius:30,
    position:"absolute",
    top:-30,
    right:5,
    elevation:15,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
  
  },
  header: {
    marginTop:60,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20
  },
  imageDetails:{
    padding:20,
    justifyContent:"space-between",
    flexDirection:"row",
    width:"100%",
    position:"absolute",
    bottom:30
  },
  detailContainer:{
    top:-30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:40,
    paddingHorizontal:20,
    backgroundColor:"white",
    flex:0.3
  },
  footer:{
    width:"100%",
    height:60,
    backgroundColor:Colors.primary,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
    paddingVertical:20
  },
  button:{
    height:50,
    width:90,
    backgroundColor:"white",
    margin:5,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  }

})