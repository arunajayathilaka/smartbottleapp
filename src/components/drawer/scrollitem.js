import React, { Component } from 'react'

import {
   View,
   Text,
   StyleSheet,
   ScrollView
} from 'react-native'

export default scrollitem = (props) => {
   const createItem = (item) => (
      <View key={item.id} style={styles.navbar}>
      <Text>12:00</Text>
      <Text style={styles.itemd}> {item.name}</Text>
      <Text>45</Text>
      </View>
   )

   return (
      <View style={styles.container}>
         <ScrollView>
            {props.listItems.map(createItem)}
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create ({
   navbar: {
    paddingTop: 20,
    height: 64,
    
    
    paddingHorizontal: 12,
    flexDirection: 'row', // step 1
    justifyContent: 'space-between', // step 2
    alignItems: 'center',
  },
   container: {
      marginTop:0,
      height: 200,
      
   },
   item: {
      margin: 2,
      padding: 15,
      height: 50,

     
   },
   itemd:{
      
   }
})