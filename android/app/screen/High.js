import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput, animated } from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import * as Progress from 'react-native-progress';
import { icon } from "react-native-vector-icons/FontAwesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Style.js'
library.add(fab, faSquareCheck, faArrowUp, faBars)



export default class Home extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      showmodal: false,
      defaultVal: "",
      color1: false,
      Color2: false,
      Color3: false,
      color11: false,
      Color12: false,
      inputVal: "",
      edit_modalOpen: false,
      modalOpen: false,
      inputVal1: "",
      inputVal2: "",
      item_name: "",

    }
  }

  render() {
    //js scope


    return (


      <>
        <View style={{
          height: "100%",
          backgroundColor: "#FFF",
          flexDirection: "column",
          width: "100%",

          alignSelf: "center"
        }}
          animationType='slide'>
          <Text style={{
              color: "#000",
              fontFamily: "BodoniModa_9pt-Bold",
              fontSize: 20,
              margin:"2%"
          }}>
          "After assessing your risk factors, including medical history, lifestyle, and any existing conditions, it appears that you have a high risk of blood clots. It's important to discuss these findings with your healthcare provider for personalized advice and potential preventive measures.
            </Text>

            <View style={{
               width: 200,
               height: 200,
               borderRadius: 100,
               
               borderWidth:25,
               borderColor:"#9067C6",
               justifyContent: "center",
               flexDirection: "row",
               alignSelf:"center",
               margin:"25%",
               shadowColor: "#000",
               shadowOffset: {
                 width: 0,
                 height: 4,
               },
               shadowOpacity: 0.30,
               shadowRadius: 4.65,
           
               elevation: 8,
            }} >
              
                <Text style={{
                  color: "#000",
                  fontFamily: "BodoniModa_9pt-Bold",
                  fontSize: 20,
                  margin:"2%",
                  alignSelf:"center"
                }}>
                   High Risk
                </Text>
              </View>
        </View>

      </>
    );
  }
}