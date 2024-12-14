import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput, animated, ImageBackground , BackHandler } from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import * as Progress from 'react-native-progress';
import { icon } from "react-native-vector-icons/FontAwesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation  , useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { faAngleRight, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Style.js';

import { Circle } from 'react-native-svg';
import { useFocusEffect } from '@react-navigation/native';

library.add(fab, faSquareCheck, faArrowUp)


export default function Symptoms({ navigation }) {
 
      

    return (


      <>

        <View style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          justifyContent: "space-around"
        }}>

          <View style={{
            width: "60%",
            height: "40%",
            top:"-3%",
            // backgroundColor: "#ff0",
            alignSelf: "center",
            borderWidth: 2,
            borderColor: "#9067C6",
            borderTopWidth: 0,

          }}>

            <View style={{
              width: "140%",
              height: "45%",
              // backgroundColor: "#f0f",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "space-around",


            }}>

              <View style={styles.SquareOfSymptoms}>
                <Text style={styles.TextOfSysmptoms}>Numbness</Text>
                <Image style={styles.ImageOfSymptoms} source={require('../../../image/Woman-with-arm-tingling.jpg')} />


              </View>

              <View style={{
                width: "32%",
                height: "85%",
                // backgroundColor: "#0ff",
                top: "20%"

              }}>
                <Text style={styles.TextOfSysmptoms}>Blured Vision</Text>
                <Image style={styles.ImageOfSymptoms} source={require('../../../image/blurry1.png')} />
                <View style={{
                  height: "34%",
                  width: "2%",
                  backgroundColor: "#9067C6",
                  alignSelf: "center"
                }}>

                </View>

              </View>
              <View style={styles.SquareOfSymptoms}>
                <Text style={{
                  color: "#9067C6",
                  fontSize: 14,
                  textAlign: "center",


                  fontFamily: "BodoniModa_9pt-ExtraBold",

                }}>Walking issue</Text>
                <Image style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: 5,



                  alignSelf: "center"

                }} source={require('../../../image/troubleWalking.jpg')} />

              </View>
            </View>
          </View>

          <View style={{
            width: "60%",
            height: "40%",
            //  backgroundColor: "#ff0",
            alignSelf: "center",
            borderWidth: 2,
            borderColor: "#9067C6",
            borderBottomWidth: 0,
            top:"-3%"


          }}>

            <Image style={{
              width: "50%",
              height: "66%",
              top: "-45%",
              backgroundColor:"#FF0",
              borderRadius: 10,

              alignSelf: "center"

            }} source={require('../../../image/SymtomsMap.jpg')} />
            <Text style={{
              fontSize: 16,
              textAlign: "center",
              color:"#fff",
              position:"absolute",
              fontFamily: "BodoniModa_9pt-ExtraBold",
              width:"40%",
              alignSelf:"center",
              top:"-20%"
            }}>Some of the symtoms</Text>

            <View style={{
              width: "140%",
              height: "45%",
              //backgroundColor: "#f0f",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: "10%",

            }}>
              <View style={styles.SquareOfSymptoms}>
                <Text style={styles.TextOfSysmptoms}>Confusion</Text>
                <Image style={styles.ImageOfSymptoms} source={require('../../../image/confusion11.jpg')} />

              </View>
              <View style={{
                width: "32%",
                height: "90%",
                //  backgroundColor: "#0ff",
                bottom: "30%"

              }}>
                <View style={{
                  height: "34%",
                  width: "2%",
                  backgroundColor: "#9067C6",
                  alignSelf: "center"
                }}>

                </View>
                <Text style={styles.TextOfSysmptoms}>Trouble Speaking</Text>
                <Image style={styles.ImageOfSymptoms} source={require('../../../image/speech-therapy.jpg')} />

              </View>
              <View style={styles.SquareOfSymptoms}>
                <Text style={styles.TextOfSysmptoms}>Headache</Text>
                <Image style={styles.ImageOfSymptoms} source={require('../../../image/brainstroke5.jpg')} />
              </View>
            </View>
          </View>

        </View>

      </>)
  }
