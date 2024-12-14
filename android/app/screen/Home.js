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
          backgroundColor: "#F7ECE1",
          flexDirection: "column",
          width: "100%",

          alignSelf: "center"
        }}
          animationType='slide'>
          <View style={{
            height: "10%",
            backgroundColor: "#F7ECE1",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            alignSelf: "center",
            marginTop: "1%"
          }}
            animationType='slide'>

            <FontAwesomeIcon icon={faBars} bounce size={25} color={"#9067C6"} />
            <FontAwesomeIcon icon={faBell} bounce size={25} color={"#9067C6"} />

            <Text style={{
              color: "#000",
              fontSize: 24,
              alignSelf: "flex-start",
              marginHorizontal: "10%",

              fontFamily: "BodoniModa_9pt-ExtraBold"





            }}>
              Hello Sara
            </Text>
            <View style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: "#000",
              margin: "1%"
            }}>

            </View>
          </View>
          <View
            style={{
              height: "100%",
              borderTopLeftRadius: 60,
              borderTopRightRadius: 60,
              backgroundColor: "#fff",
              flexDirection: "column",
              width: "98%",
              alignContent: "center",
              alignSelf: "center",
              marginTop: "8%",


            }}
            animationType='slide'>

            <View style={{
              height: "16%",
              width: "62%",
              backgroundColor: "#9067C6",

              marginTop: "-3%",
              alignSelf: "center",
              top: "-5%",
              borderRadius: 10,
            }}>
              <Text style={{
                color: "#fff",
                fontSize: 25,
                padding: "4.2%",
                marginVertical: "1%",
                textAlign: "center",
                alignSelf: "center",
                flexWrap: "wrap",
                fontFamily: "GFSNeohellenic-Bold"





              }}>
                Tap to know your case based on your results
              </Text>

            </View>
            <ScrollView style={{



              flexDirection: "column",
              width: "100%",
              alignContent: "center",
              alignSelf: "center",

            }}
              animationType='slide'>


              <View style={{
                height: "15%",
                //backgroundColor:"#ff0",
                flexDirection: "row",
                width: "70%",

                alignSelf: "center",


              }}
              >
                <Text style={{
                  color: "#000",
                  fontSize: 25,


                  textAlign: "center",
                  alignSelf: "center",
                  flexWrap: "wrap",
                  fontFamily: "GFSNeohellenic-Bold"





                }}>
                  All you need to know about Brain strokes
                </Text>
              </View>
              <View style={{
                height: "19%",

                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",

                marginVertical: "8%",

              }}
              >
                  <TouchableOpacity onPress={() => {
                  { this.props.navigation.navigate("Symptoms") }
                }}
                style={styles.SquareOfHome}>

                  <Image style={{
                    width: "42%",
                    height: "42%",
                    resizeMode: "center",
                    alignSelf: "center",



                  }

                  }
                    source={require('../../../image/symtoms.jpg')} />

                  <Text style={styles.TextOfSquares}>
                    Symptoms
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                  { this.props.navigation.navigate("PickPlan") }
                }}
                  style={styles.SquareOfHome}
                >
                  <Image style={{
                    width: "42%",
                    height: "42%",
                    resizeMode: "center",
                    alignSelf: "center",



                  }

                  }
                    source={require('../../../image/avoidIt.jpg')} />

                  <Text style={styles.TextOfSquares}>
                    How to avoid it
                  </Text>
                </TouchableOpacity>

                <View style={styles.SquareOfHome}
                >
                  <Image style={{
                    width: "42%",
                    height: "42%",
                    resizeMode: "center",
                    alignSelf: "center",



                  }

                  }
                    source={require('../../../image/riskFactor.jpg')} />

                  <Text style={styles.TextOfSquares}>
                    Risk Factors
                  </Text>
                </View>
              </View>
              <View style={{
                height: "10%",
                backgroundColor: "#9067C6",
                flexDirection: "row",
                width: "80%",
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                borderRadius: 30,
                marginBottom: "5%",


              }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={22} />
                <TextInput
                  style={{

                    width: "85%",
                    height: "100%",
                    borderWidth: 1,
                    marginLeft: "1%",
                    borderColor: "#9067C6",
                    borderRadius: 22,
                    alignSelf: "center",
                    color: this.state.color1 ? '#969696' : "#000",

                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                    paddingHorizontal: 10,
                    fontFamily: "BodoniModa_9pt-ExtraBoldItalic",
                    flexDirection: "row",
                    fontSize: 18,

                  }}
                  value={this.state.inputVal1 + ""}
                  placeholder="Search for the latest News!"
                  placeholderTextColor={"#000"}
                  textContentType={'emailAddress'}

                  onChangeText={(newVal) => {
                    console.log(newVal)
                    this.setState({ inputVal1: newVal })

                  }}
                >
                </TextInput>

              </View>
              <View style={{
                marginBottom: "15%",
                //backgroundColor: "#f0f",
                height: "30%",
                width: "80%",
                borderRadius: 15,
                alignSelf: "center",
                borderColor: "#9067C6",
                borderWidth: 1,


              }}>

                <Text style={{
                  color: "#000",
                  fontSize: 20,
                  textAlign: "center",
                  padding: "2%",

                  fontFamily: "GFSNeohellenic-Bold"





                }}>
                  Before we start,you shaould answer
                  these questions to know your case
                </Text>

                <View style={{
                  margin: "4%",
                  backgroundColor: "#9067C6",
                  height: "32%",
                  width: "40%",
                  borderRadius: 15,
                  alignItems: "center",
                  alignContent: "center"


                }}>
                  <TouchableOpacity onPress={() => {
                    { this.props.navigation.navigate("Gender") }
                  }}>
                    <Text style={{
                      color: "#fff",
                      fontSize: 18,
                      textAlign: "center",
                      padding: "5%",
                      alignSelf: "center",
                      fontFamily: "BodoniModa_9pt-ExtraBold"





                    }}>
                      Start Now
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
              <View style={{
                width: "100%",
                height: ""
              }}>

              </View>

            </ScrollView>



          </View >
        </View>

      </>
    );
  }
}