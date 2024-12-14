import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput, animated } from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import * as Progress from 'react-native-progress';
import { icon } from "react-native-vector-icons/FontAwesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { faAngleRight, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Style.js'
import { Circle } from 'react-native-svg';
library.add(fab, faSquareCheck, faArrowUp)

export default class TipOne extends React.Component {


  render() {
    //js scope


    return (


      <>
        <View style={{
          width: "90%",
          height: "35%",
          alignSelf: "center",
          backgroundColor: "#9067C6",
          borderBottomEndRadius: 20,
          borderBottomLeftRadius: 20,
          justifyContent: "center"
        }}>
          <View style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginHorizontal: "3%"
          }}>
            <FontAwesomeIcon icon={faGear} />
          </View>
          <Text style={{
            color: "#242038",
            fontSize: 18,
            textAlign: "center",

            alignSelf: "center",
            fontFamily: "BodoniModa_9pt-ExtraBold"

          }}>
            Profile
          </Text>
          <View style={{
            width: 90,
            height: 90,
            borderRadius: 45,
            backgroundColor: "#fff",
            alignSelf: "center"
          }}>

          </View>
          <Text style={{
            color: "#242038",
            fontSize: 26,
            textAlign: "center",

            alignSelf: "center",
            fontFamily: "BodoniModa_9pt-ExtraBold"

          }}>
            Sara
          </Text>
        </View>
        <View style={{
          width: "82%",
          height: "90%",
          alignSelf: "center",
          backgroundColor: "#fff",
          top: -30,
          borderRadius: 10,
        }}
          animationType='slide'>
          <View style={styles.TabProfileContainer}>
            <Text style={styles.TabProfileText}>
              Personal information
            </Text>
            <FontAwesomeIcon icon={faAngleRight}
              style={{
                margin: "5%",
              }}
              size={23}/>
          </View>
          <View style={styles.TabProfileContainer}>
            <Text style={styles.TabProfileText}>
              Brain Stroke Test
            </Text>
            <FontAwesomeIcon icon={faAngleRight}
              style={{
                margin: "5%",
                
              }}
              
              size={23}/>
          </View>
          <View style={styles.TabProfileContainer}>
            <Text style={styles.TabProfileText}>
            Date of tests
            </Text>
            <FontAwesomeIcon icon={faAngleRight}
              style={{
                margin: "5%",
              }}
              size={23}/>
          </View>
          <View style={styles.TabProfileContainer}>
            <Text style={styles.TabProfileText}>
            Heart Rate
            </Text>
            <FontAwesomeIcon icon={faAngleRight}
              style={{
                margin: "5%",
              }}
              size={23}/>
          </View>
          <View style={styles.TabProfileContainer}>
            <Text style={styles.TabProfileText}>
            Historical data tracking     
            </Text>
            <FontAwesomeIcon icon={faAngleRight}
              style={{
                margin: "5%",
              }}
              size={23}/>
          </View>


        </View>
      </>)
  }
}