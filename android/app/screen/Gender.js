import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput, animated , Button} from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import * as Progress from 'react-native-progress';
import { icon } from "react-native-vector-icons/FontAwesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
library.add(fab, faSquareCheck, faArrowUp)



export default class Gender extends React.Component {
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

  handleButtonPress = (value) => {
   
      // Navigate to the next screen with the parameter value
      this.props.navigation.navigate('Age', { gender: this.state.value });
      
    ;
  };
   

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
              Let's Start
            </Text>

          </View>
          
          <Progress.Bar style={{
            width:"91%",
            alignSelf:"center"
          }}
            progress={0.1}
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
            fontFamily:"BodoniModa_9pt-Medium",
            justifyContent: "center",
            marginVertical: "10%",
            //backgroundColor:"#0ff"



          }}>
            What is your Gender ?
          </Text>

          <View style={{
            flex: 1 ,
            
          }}>
            
              <TouchableOpacity onPress={() => this.handleButtonPress(1)}
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
                  Male
                </Text>


              </TouchableOpacity>
            
              <TouchableOpacity onPress={() => this.handleButtonPress(0)}
             
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
                  Female
                </Text>


              </TouchableOpacity>
           

          </View>
          <TouchableOpacity  onPress={() => {
              {this.handleButtonPress}}}>
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
              
              <FontAwesomeIcon icon={faArrowUp} color={"#fff"}/>

            </View>
          </TouchableOpacity>
        </View>

   
      </>
    );
  }
}