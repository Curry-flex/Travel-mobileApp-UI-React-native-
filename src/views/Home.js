import { Dimensions, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../color/color'
import Icon from "react-native-vector-icons/MaterialIcons"
import places from '../Data/Places'
import Card from './Card'
import RecomendedCar from './RecomendedCar'
const {width} =Dimensions.get("screen")

export default function Home({navigation}) {
  const categoryIcons = [
    <Icon name="flight" size={25} color={Colors.primary} />,
    <Icon name="beach-access" size={25} color={Colors.primary} />,
    <Icon name="near-me" size={25} color={Colors.primary} />,
    <Icon name="place" size={25} color={Colors.primary} />,
  ];

  return (
    <SafeAreaView style={{backgroundColor:Colors.white,flex:1}}>
     <StatusBar translucent={false} backgroundColor={Colors.primary}/>
     <View style={styles.header}>
       <Icon name="sort" size={28} color="white"/>
       <Icon name="notifications-none" size={28} color="white"/>
     </View>

     <ScrollView showsVerticalScrollIndicator={false}>
       <View style={{
         backgroundColor:Colors.primary,
         height:120,
         paddingHorizontal:20
       }}>
       <View>
       <Text style={{color:Colors.white,fontSize:20,fontWeight:"bold",marginBottom:5}}>Explore the</Text>
       <Text style={{color:Colors.white,fontSize:20,fontWeight:"bold",marginBottom:40}}>beautiful places</Text>
       <View style={styles.input}>
         <Icon name="search" size={28} color="black" />
         <TextInput placeholder="find location" style={{fontSize:16,color:Colors.dark}} placeholderTextColor={Colors.grey}/>
       </View>

       </View>
       </View>
       <View style={styles.category}>
        {
          categoryIcons.map((icon,index)=>(
            <View style={{height:70,width:70,
            backgroundColor:Colors.secondary,
            borderRadius:10,
            justifyContent:"center",
            alignItems:"center"}}>
             
             {icon}
            
            </View>
          ))
        }
       </View>
       <Text style={{fontSize:18,color:"black",marginVertical:20,fontWeight:"bold",marginHorizontal:20}}>Places</Text>
       <View>
         <FlatList 
          contentContainerStyle={{paddingHorizontal:20}}
           horizontal
          showsHorizontalScrollIndicator={false} 
          data={places} renderItem={({item})=> <Card  place={item} navigation={navigation}/>}/>
       </View>
       <Text style={{color:"black",marginHorizontal:20,marginVertical:20,fontSize:20,fontWeight:"bold"}}>Recomended</Text>
       <FlatList 
       snapToInterval={width-20}
       contentContainerStyle={{paddingLeft:20,paddingBottom:20}}
       horizontal
       showsHorizontalScrollIndicator
       data={places}
       renderItem={({item})=><RecomendedCar place={item} navigation={navigation}/>}
       />
     </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:Colors.primary,
    paddingHorizontal:20,
    paddingVertical:20,

  },
  input:{
    height:60,
    width:"100%",
    flexDirection:"row",
    backgroundColor:Colors.white,
    borderRadius:10,
    position:"absolute",
    top:90,
    paddingHorizontal:20,
    alignItems:"center" ,
    elevation:15 
    
  },
  category:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:60,
    paddingHorizontal:20
  },
  iconContainer:{
    justifyContent:"center",
    alignItems:"center"
  }
})