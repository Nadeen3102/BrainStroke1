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
import Hypertension from './Hypertension';
library.add(fab, faSquareCheck, faArrowUp)



export default class Residence extends React.Component {
  constructor(props) {
    super(props)
   /* const {gender,age,hypertension,heart,ever_married,workType}= this.props.route.params;*/
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
     
     
      residence:null,
      current_index: -1
    }
    
  }
 /* handleButtonPress = (value8) => {
    const { gender,age,hypertension,ever_married,heart,workType } = this.state;
    this.setState({ residence: value8 }, () => {
      // Navigate to the next screen with the parameter value
      this.props.navigation.navigate('Glucose', {gender,age ,hypertension,ever_married,heart,workType,residence: value8 });
    });
  };*/

  render() {
    //js scope


    return (


      <>


        <View style={{
          height: "100%",
          backgroundColor:"#fff",
          flexDirection: "column",
          width: "100%",
          
          alignSelf: "center"
        }}
          animationType='slide'>


          <View
            style={{
              // backgroundColor: '#ec407a',
              width: '100%',
              paddingVertical: 3,
              height: "8%",
              flexDirection: "row",

              marginTop: 10,
              borderRadius: 4,

              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,


            }}>

            <Text style={{
              color: "#424242",
              fontSize: 20,
              fontWeight: "600",
              padding: "2%",
              marginLeft: "2%",
              fontFamily:"BodoniModa_9pt-ExtraBold"




            }}>
               One More...
            </Text>

          </View>
          <Progress.Bar 
           style={{
            width:"91%",
            alignSelf:"center"
          }}
            progress={0.7}
            width={null}
            borderWidth={1}
            animated={true}
            color={"#9067C6"}
            unfilledColor='none'
            animationType='spring'
            useNativeDriver={true}
          />




          <Text style={{
            color: "#424242",
            fontSize: 20,
            fontWeight: "600",
            padding: "2%",
            marginLeft: "4%",

            justifyContent: "center",
            marginVertical: "10%",
            fontFamily:"BodoniModa_9pt-Medium",



          }}>
            What is your residence type ?
          </Text>

          <View style={{
            flex: 1 ,
            
          }}>

<TouchableOpacity /*onPress={() => this.handleButtonPress(1)}*/
                style={{

                  width: "52%",
                  height: "13%",
                  borderWidth: 1,
                  margin: "2%",
                  borderColor: "#9067C6",
                  borderRadius: 20,
                  alignSelf: "center",
                  color: this.state.color1 ? '#969696' : "#000",

                  
                  
                  fontWeight: "400",

                  flexDirection: "row",
                  fontSize: 20,
                }}
              >
                <Text style={{
                  color: "#424242",
                  fontSize: 20,
                  fontWeight: "600",
                  padding: "5%",
                  
                  fontFamily:"BodoniModa_9pt-Medium",





                }}>
                  Urban
                </Text>


              </TouchableOpacity>
              <TouchableOpacity /*onPress={() => this.handleButtonPress(0)}*/
                style={{

                  width: "52%",
                  height: "13%",
                  borderWidth: 1,
                  margin: "2%",
                  borderColor: "#9067C6",
                  borderRadius: 20,
                  alignSelf: "center",
                  color: this.state.color1 ? '#969696' : "#000",
                  marginTop:"10%",
                  
                 
                  fontWeight: "400",

                  flexDirection: "row",
                  fontSize: 20,
                }}
              >
                <Text style={{
                  color: "#424242",
                  fontSize: 20,
                  
                  padding: "5%",
                  fontFamily:"BodoniModa_9pt-Medium",





                }}>
                  Rural
                </Text>


              </TouchableOpacity>
           

          </View>
          <TouchableOpacity  onPress={() => {
              {this.props.navigation.navigate("Glucose")}}}>
            <View style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "#9067C6",
              justifyContent: "flex-end",
              alignSelf: "flex-end",
              
              margin: "5%",
              alignContent: "center",
              padding: "4%"





            }}>

              <FontAwesomeIcon icon={faArrowUp} color={"#fff"} />

            </View>
          </TouchableOpacity>
        </View>

   
      </>
    );
  }
}