import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput, animated, ImageBackground , Button } from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import * as Progress from 'react-native-progress';
import { icon } from "react-native-vector-icons/FontAwesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { loadLocalRawResource } from 'react-native-svg';
library.add(fab, faArrowUp, faArrowRight)



export default function Doctor({ navigation }) {
  
    //js scope


    return (


      <>
      <ScrollView>
        <ImageBackground
          style={{ 
            width:"100%",
            height:"100%"
          
          }}

          source={require('../../../image/Doctor.jpg')} 
          resizeMode="cover" >
          <Text style={{
            marginTop:"108%",
            alignSelf:"center",
            flexDirection:"row",
            justifyContent:"flex-end",
            //backgroundColor:"#ff0",
            fontFamily:"BodoniModa_9pt-ExtraBold",
            fontSize:24,
            width:"76%",
            color:"#242038"
          }}>Detect Brain strokes and help you avoid it through a healthy routine and great follow up system
          </Text>
          <TouchableOpacity onPress={() => {navigation.navigate("GetStarted")} }>
          <View style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#9067C6",
                justifyContent: "flex-end",
                alignSelf: "flex-end",
                margin: "4%",
                marginBottom:"5%",
                alignContent: "center",
                padding:"4%"





              }}>
              
              <FontAwesomeIcon icon={faArrowRight} bounce color="#fff" />
              
              </View>
              </TouchableOpacity>
        </ImageBackground>
        </ScrollView>

      </>
    );
  }
