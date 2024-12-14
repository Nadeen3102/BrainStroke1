import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput, animated } from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import * as Progress from 'react-native-progress';
import { icon } from "react-native-vector-icons/FontAwesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import styles from './Style.js'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
library.add(fab, faArrowUp)



export default class Smoking extends React.Component {
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
              color: "#242038",
              fontSize: 20,
              fontWeight: "600",
              padding: "2%",
              marginLeft: "2%",
              fontFamily: "BodoniModa_9pt-ExtraBold"




            }}>
              And we are done ...
            </Text>

          </View>
          <Progress.Bar
            style={{
              width: "91%",
              alignSelf: "center"
            }}
            progress={0.9}
            width={null}
            borderWidth={1}
            animated={true}
            color={"#9067C6"}
            unfilledColor='none'
            animationType='spring'
            useNativeDriver={true}
          />




          <Text style={{
            color: "#242038",
            fontSize: 20,
            fontWeight: "600",
            padding: "2%",
            marginLeft: "4%",
            fontFamily: "BodoniModa_9pt-Medium",
            justifyContent: "center",
            marginVertical: "10%",




          }}>
            What is your smoking status ?
          </Text>

          <View style={{
            flex: 1,
            justifyContent: "space-between"
          }}>
            <View style={{

              width: "80%",
              height: "80%",
              alignSelf: "center",

              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap"


            }}>
              <TouchableOpacity >
             
              <View style={styles.BigCircle } >
              
                <Text style={styles.CircleText}>
                  Formely Smoked
                </Text>
              </View>
            
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.SmallCircle}>
                <Text style={styles.CircleText}>
                  Smoking
                </Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.SmallCircle}>
                <Text style={styles.CircleText}>
                  Unknown
                </Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.setState({
                  color1: !this.state.color1,
                })
              }} style= {styles.BigCircle} 
                       >
                <Text style={styles.CircleText}>
                  Never Smoked
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity  onPress={() => {
              {this.props.navigation.navigate("High")}}}>
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
        </View>
      </>
    );
  }
}