import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput, animated ,Button, RightIcon} from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import * as Progress from 'react-native-progress';
import { icon } from "react-native-vector-icons/FontAwesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
library.add(fab, faSquareCheck, faArrowUp , faEyeSlash)



export default class Signin extends React.Component { 
  
  constructor(props) {
    super(props)
    this.state = {
      showmodal: false,
      defaultVal: "",                                     
      color1: false,
      Color2: false,
      Color3: false,
      color9: false,
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
      
      setHidePassword:true,
      password:"",
      setPassword:"",
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
          <ScrollView
            style={{
              marginTop: "20%",
              borderTopLeftRadius: 150,
              backgroundColor: "#fff",
              flexDirection: "column",
              width: "98%",
              alignContent: "center",
              alignSelf: "center",
              
            }}
            animationType='slide'>





            <Text style={{
              color: "#242038",
              fontSize: 24,
              
              padding: "2%",
              alignSelf: "center",
              fontFamily:"BodoniModa_9pt-ExtraBold"


            }}>
              Sign In
            </Text>
            
           
            
            <Text style={{
              color: "#242038",
              fontSize: 20,
              
              marginHorizontal: "17%",
              fontFamily:"BodoniModa_9pt-ExtraBold"



            }}>
              Email
            </Text>
            <TextInput
              style={{

                width: "70%",
                height:"10%",
                borderWidth: 1,
                margin: "0.5%",
                borderColor: "#9067C6",
                borderRadius: 22,
                alignSelf: "center",
                color: this.state.color1 ? '#969696' : "#000",
                marginBottom: "4%",
                justifyContent: 'space-around',
                alignItems: 'flex-end',
                paddingHorizontal:10,
                fontFamily:"GFSNeohellenic-Bold",
                flexDirection: "row",
                fontSize: 20,

              }}
              value={this.state.inputVal1 + ""}
              placeholder="Enter your Email"
              placeholderTextColor={"#9067C6"}


              onChangeText={(newVal) => {
                console.log(newVal)
                this.setState({ inputVal1: newVal })

              }}
            >
            </TextInput>
            <Text style={{
              color: "#242038",
              fontSize: 20,
              fontWeight: "600",
              marginHorizontal: "17%",
              fontFamily:"BodoniModa_9pt-ExtraBold"



            }}>
              Password
            </Text>
            <TextInput
              style={{

                width: "70%",
                height:"10%",
                borderWidth: 1,
                margin: "0.5%",
                borderColor: "#9067C6",
                borderRadius: 22,
                alignSelf: "center",
                color: this.state.color1 ? '#969696' : "#000",
                paddingHorizontal:10,
                fontFamily:"GFSNeohellenic-Bold",
                justifyContent: 'space-around',
                alignItems: 'flex-end',
                
                marginBottom: "4%",
                flexDirection: "row",
                fontSize: 20,

              }}
              value={this.state.add_item_name + ""}
              placeholder="Enter your password"
              placeholderTextColor={"#9067C6"}
              secureTextEntry={true}
              isPassword={true}
              
             
              onChangeText={(newVal) => {
                console.log(newVal)
                this.setState({ add_item_name: newVal })

              }}
            > 
            </TextInput>

            <View


              style={{

                width: "70%",
                height:"10%",
                backgroundColor: "#9067C6",
                alignSelf: "center",
                borderRadius: 22,
                alignItems: "center",
                marginBottom: "5%",
                marginTop:"4%",


              }}>
              <TouchableOpacity onPress={() => {
              {this.props.navigation.navigate("TabPages")}}}>
              <Text style={{
                color: "#fff",
                fontSize: 21,
                
                marginHorizontal: "17%",
                textAlign: "center",
                padding: "4%",
                alignSelf: "center",
                width:"100%",
                fontFamily:"BodoniModa_9pt-ExtraBold"

              }}>
                Log In
              </Text>
              </TouchableOpacity>
            </View>

            <View

              style={{

                width: "72%",
                height: "7%",
                
                alignSelf: "center",
                borderRadius: 22,
                alignItems: "center",
                marginBottom:"1%",
                flexDirection: "row",

              }}>

              <View


                style={{

                  width: "40%",
                  height: "6%",
                  backgroundColor: "#9067C6",
                  alignSelf: "center",
                  borderRadius: 22,
                  alignItems: "center",
                  alignSelf:"center",
                  marginLeft:"5%",
                  justifyContent:"center",

                }}>





              </View>

              <Text style={{
                color: "#242038",
                fontSize: 21,
                fontWeight: "600",
                fontFamily:"BodoniModa_9pt-ExtraBold"


              }}>
                OR
              </Text>
              <View


                style={{

                  width: "40%",
                  height: "6%",
                  backgroundColor: "#9067C6",
                  alignSelf: "center",
                  borderRadius: 22,
                  
                  alignSelf:"center",
                 
                  justifyContent:"center",

                }}>



              </View>
            </View>
            <View


                style={{

                  width: "80%",
                  height: "40%",
                  //backgroundColor: "#ff0",
                  alignSelf: "center",
                 marginBottom:"40%",
                  flexDirection:"row",
                  justifyContent:"space-around",
                }}>

                 <FontAwesomeIcon icon={faFacebook} bounce size={30}   />
              
                 <FontAwesomeIcon icon={faApple} size={32} />

                 <FontAwesomeIcon icon={faGoogle} size={30}/>
                </View>

           
          </ScrollView>

        </ScrollView >


      </>
    );
  }
}