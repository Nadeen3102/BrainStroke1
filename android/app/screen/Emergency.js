import call from 'react-native-phone-call'
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
import { faAngleRight, faGear, faMagnifyingGlass, faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import styles from './Style.js';

import { Circle } from 'react-native-svg';
import { useFocusEffect } from '@react-navigation/native';

library.add(fab, faSquareCheck, faArrowUp , faTruckMedical)

export default function Emergency({ navigation }) {

const triggerCall  =()=>{
  const args = {
    number: '123', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
    skipCanOpen: true // Skip the canOpenURL check
  }
  call(args).catch(console.error);
};


return (
  <TouchableOpacity onPress={triggerCall}
  style={{
    width:250,
    height:250,
    borderRadius:125,
    alignSelf:"center",
    margin:"40%",
    marginLeft:"45%",
    backgroundColor:"#9067C6"
  }}>
  <FontAwesomeIcon icon={faTruckMedical} size={120} style={{
    alignSelf:"center",
    margin:"6%"
  }} />
  <Text style={{
    
    color: "#000",
    fontFamily: "BodoniModa_9pt-Bold",
    fontSize: 20,
    margin:"2%",
    alignSelf:"center"
  }}>Call Immediately</Text>
  </TouchableOpacity>
)
}