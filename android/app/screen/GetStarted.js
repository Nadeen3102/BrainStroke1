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

import { useNavigation } from '@react-navigation/native';
library.add(fab, faSquareCheck, faArrowUp)



export default class GetStarted extends React.Component {
  
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
      add_item_price: "",
      add_item_name: "",
      edit_item_name: "",
      edit_Item_price: "",
      current_page: "",
      array_data: [],

      current_index: -1
    }
  }
 
  render() {
    //js scope


    return (


      <>


        <View style={{
          height: "100%",
          // backgroundColor:"#ff0",
          flexDirection: "column",
          width: "100%",

          alignSelf: "center"
        }}
          animationType='slide'>


          <Image style={{
            width: "100%",
            height: "70%",
            resizeMode: "stretch",
            borderBottomRightRadius: 100,



          }

          }
            source={require('../../../image/started.jpg')} />
          <TouchableOpacity onPress={() => {
              {this.props.navigation.navigate("Signup")}}}
            style={{

              width: "60%",
              height: "8%",
              borderWidth: 1,
              margin: "2%",
              marginTop: "16%",
              borderColor: "#9067C6",
              borderRadius: 10,
              alignSelf: "center",
              backgroundColor: "#9067C6",
              color: this.state.color1 ? '#fff' : " #F7ECE1",

              justifyContent: 'space-around',
              alignItems: 'flex-end',
              fontWeight: "400",
              flexDirection: "row",
              fontSize: 20,
            }}
          >
            <Text style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
              padding: "3%",
              fontFamily:"BodoniModa_9pt-ExtraBold"





            }}>
              Get Started
            </Text>


          </TouchableOpacity>

          <View style={{
            width: "80%",
            height: "30%",
            borderRadius: 25,
            // backgroundColor: "#9067C6",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "3%",
            margin: "5%",
            alignContent: "center",
            padding: "4%",
            flexDirection: "row"





          }}>


            <Text style={{
              color: "#767d81",
              fontSize: 20,
              
              fontFamily:"GFSNeohellenic-Bold"

            }}
            >
              Already have an account ?
            </Text>

            <TouchableOpacity onPress={() => {
              {this.props.navigation.navigate("Signin")}
              this.setState({
                color1:!this.state.color1,
              })
            }}>
              <Text style={{
                color: this.state.color1 ? '#8D86C9' : "#767d81",
                fontSize: 20,
                fontFamily:"GFSNeohellenic-Bold",
                marginLeft: "5%"



              }}
              >
                Login
              </Text>

              </TouchableOpacity>
          </View>
        
      </View >

   
      </>
    );
  }
}