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
library.add(fab, faSquareCheck, faArrowUp)



export default class PickPlan extends React.Component {
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
     <ScrollView style={{

backgroundColor: "#9067C6",
flexDirection: "column",
width: "100%",

alignSelf: "center"
}}
animationType='slide'>
  <Image style={{
    height:"15%",
    width:"30%",
    margin:"6%",
    marginHorizontal:"10%",
    resizeMode:"center"

  }}source={require('../../../image/cerebral-guard-high-resolution-logo-transparent.png')}/>

        <ScrollView style={{
          height: "100%",
          backgroundColor: "#fff",
          borderTopLeftRadius: 150,
          width: "100%",
          
          alignSelf: "center",
        
        }}
          animationType='slide'>
          <Text style={{
            color: "#242038",
            fontSize: 20,
            textAlign: "center",
            width:"100%",
            height:"10%",
            marginTop:"30%",
            

            fontFamily: "BodoniModa_9pt-Black",
          }}>
            Pick an Activty
          </Text>
          <View style={{
            width: "90%",
            height: "30%",
            //backgroundColor: "#f0f",
            alignSelf:"center",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom:"110%"


          }}>
             <TouchableOpacity onPress={() => {
                  { this.props.navigation.navigate("HomeOfMeals") }
                }} style={{
                height:"60%",
                width:"50%",
                borderRadius:5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,
            
                elevation: 18,
              }}>
                
                <Image style={styles.ImageOfSymptoms} source={require('../../../image/diet.jpg')} />
                <Text style={{
                   color: "#000",
                   fontSize: 20,
                   textAlign: "center",
                   width:"100%",
                   height:"20%",
       
                   fontFamily: "BodoniModa_9pt-ExtraBold",
                }}>Diet</Text>

              </TouchableOpacity>
              <View style={{
                height:"60%",
                width:"50%",
                borderRadius:5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,
            
                elevation: 18,
              }}>
                
                <Image style={styles.ImageOfSymptoms} 
                source={require('../../../image/Exercise.png')} />
                <Text style={{
                   color: "#000",
                   fontSize: 20,
                   textAlign: "center",
                   width:"100%",
                   height:"20%",
       
                   fontFamily: "BodoniModa_9pt-ExtraBold",
                }}>Exercise</Text>

              </View>

          </View>

        </ScrollView >
</ScrollView>

      </>
    );
  }
}