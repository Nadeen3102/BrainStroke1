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
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Style.js'
library.add(fab, faSquareCheck, faArrowUp)

export default class TipSix extends React.Component {


  render() {
    //js scope


    return (


      <>
        <View style={styles.ImageWrapper}>
          <Image style={styles.TipImage}
            source={require('../../../image/Smoke.jpg')} />
        </View>
        <View style={styles.TipTitleContainer}>
          <Text style={styles.TipTitleText}>
          Avoid Smoking
          </Text>
        </View>
        <Text style={styles.TipDescription}>
        Today, take the first step towards quitting smoking by reaching out to a smoking cessation program or counselor for guidance. 
        </Text>
        <TouchableOpacity onPress={() => {
              {this.props.navigation.navigate("TipSeven")}}}>
          <View style={styles.ArrowUpIcon}>

            <FontAwesomeIcon icon={faArrowUp} color={"#fff"} />

          </View>
        </TouchableOpacity>
      </>
    );
  }
}