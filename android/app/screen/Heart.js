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



export default class Heart extends React.Component {
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
      gender,
      age,
      hypertension,
      
      current_index: -1
    }
    const {gender,age,hypertension}= this.props.route.params;
  }
  handleButtonPress = (value2) => {
    const { gender,age,hypertension } = this.state;
    this.setState({ heart: value2 }, () => {
      // Navigate to the next screen with the parameter value
      this.props.navigation.navigate('Marital', { gender,age ,hypertension,heart:value2 });
    });
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
              Another one ...
            </Text>

          </View>
          <Progress.Bar 
           style={{
            width:"91%",
            alignSelf:"center"
          }}
            progress={0.4}
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
            Do you have any heart diseases ?
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
                  Yes
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
                  No
                </Text>


              </TouchableOpacity>
           

          </View>
          <TouchableOpacity onPress={() => {
              {this.props.navigation.navigate("Marital")}}}>
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

        {/* Add modal
        <Modal
          visible={this.state.modalOpen}
          onRequestClose={() => {
            this.setState({ modalOpen: false })

          }}

          animationType='slide'
        >
          <Text style={{
            color: "#000",
            fontSize: 20,
            fontWeight: "500",
            height: "5%",
            alignSelf: "center",
            textAlign: "center",
            margin: "10%"

          }}>
            {this.state.current_page == "add" ? 'add item name' : "edit item name"}

          </Text>
          <TextInput
            style={{

              width: "90%",
              height: "12%",
              borderWidth: 1,
              margin: 10,
              borderColor: "#000",
              alignSelf: "center",
              color: this.state.color1 ? '#969696' : "#000",

              justifyContent: 'space-around',
              alignItems: 'flex-end',
              fontWeight: "400",

              flexDirection: "row",
              fontSize: 20,
            }}
            value={this.state.add_item_name + ""}
            placeholder="Mandatory"
            placeholderTextColor={"#63686d"}

            onChangeText={(newVal) => {
              console.log(newVal)
              this.setState({ add_item_name: newVal })

            }}
          >
          </TextInput>
          <TextInput
            style={{

              width: "90%",
              height: "12%",
              borderWidth: 1,
              margin: 10,
              color: this.state.color1 ? '#969696' : "#000",
              borderColor: "#000",
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              fontWeight: "400",
              alignSelf: "center",
              flexDirection: "row",
              fontSize: 20,
            }}
            value={this.state.add_item_price + ""}
            placeholder="Mandatory"
            placeholderTextColor={"#63686d"}

            onChangeText={(PriceVal) => {

              this.setState({ add_item_price: PriceVal })

            }}
          >
          </TextInput>
          <View style={{


            backgroundColor: '#fff',
            width: '90%',
            paddingVertical: 6,
            height: "10%",
            flexDirection: "row",
            margin: 10,
            borderRadius: 4,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }} >
            <TouchableOpacity style={{


              backgroundColor: '#0f0',
              width: '40%',
              paddingVertical: 6,
              height: "100%",
              flexDirection: "row",
              margin: 10,
              borderRadius: 4,
              alignSelf: "center"

            }}
              onPress={
                () => {
                  this.state.current_page == "add" ? this.addItem() : this.edit_value();
                }}>
              <Text style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "500",

                alignSelf: "center",
                textAlign: "center",
                marginHorizontal: "25%"

              }}>
                {this.state.current_page == "add" ? 'Save' : "Update"}
              </Text>
            </TouchableOpacity>
            <View style={{


              backgroundColor: '#f00',
              width: '40%',
              paddingVertical: 6,
              height: "100%",
              flexDirection: "row",
              margin: 10,
              borderRadius: 4,
              alignSelf: "center"

            }}>
              <Text style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "500",

                alignSelf: "center",
                textAlign: "center",
                marginHorizontal: "25%"

              }}>
                Cancel
              </Text>
            </View>
          </View>
        </Modal >

   */}
      </>
    );
  }
}