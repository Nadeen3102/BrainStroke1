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

export default class TipFive extends React.Component {


  render() {
    //js scope


    return (


      <>
        <View style={styles.ImageWrapper}>
          <Image style={styles.TipImage}
            source={require('../../../image/Break.jpg')} />
        </View>
        <View style={styles.TipTitleContainer}>
          <Text style={styles.TipTitleText}>
          Take Breaks
          </Text>
        </View>
        <Text style={styles.TipDescription}>
        Today, try setting a reminder to stand up and stretch every hour. Take a short walk around your workspace or do some gentle leg exercises to keep your circulation flowing
        </Text>
        <TouchableOpacity onPress={() => {
              {this.props.navigation.navigate("TipSix")}}}>
          <View style={styles.ArrowUpIcon}>

            <FontAwesomeIcon icon={faArrowUp} color={"#fff"} />

          </View>
        </TouchableOpacity>
      </>
    );
  }
}