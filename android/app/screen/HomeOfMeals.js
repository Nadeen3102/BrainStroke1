import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

library.add(fab, faArrowUp)
const image = {
  uri: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export default function HomeOfMeals({ navigation }) {


  //js scope


  return (
    <>

      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            height: '10%',
            justifyContent: 'space-between',
            
            alignItems: 'center',
            
          }}>
            <TouchableOpacity
              onPress={() => {
                { navigation.navigate("KindOfDiet") }
              }}>
              <View style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#9067C6",
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                marginLeft: "80%",
                alignContent: "center",
                padding: "4.6%"





              }}>
                  <FontAwesomeIcon icon={faArrowUp} color={"#fff"} />
                </View>
              
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </>
        );
}

        const styles = StyleSheet.create({
          container: {
          flex: 1,
  },
        image: {
          flex: 1,
        justifyContent: 'flex-end',
        paddingBottom:'20%'
  },
        item: {
          flexDirection: 'row',
        backgroundColor: '#fff',
        width: '40%',
        height: '30%',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopEndRadius:10,
        borderBottomEndRadius:10
  },
        icons:{
          width:"40%",
        backgroundColor:'#8d86c9',
        borderRadius:15
  }
});


