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



export default styles = StyleSheet.create({

  BigCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#9067C6',
    justifyContent: "center",
    flexDirection: "row",
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

  },
  SmallCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#9067C6",
    justifyContent: "center",
    flexDirection: "row",
    margin: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,


  },
  CircleText: {
    color: "#242038",
    fontSize: 17,
    fontWeight: "600",
    padding: "5%",
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "BodoniModa_9pt-Medium",


  },
  TextOfSquares: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    margin: "10%",

    fontFamily: "BodoniModa_9pt-ExtraBold",


  },
  SquareOfHome: {
    height: "100%",
    backgroundColor: "#9067C6",
    borderRadius: 5,
    width: "22%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,


  },
  ImageWrapper: {
    width: "96%",
    height: "55%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    alignSelf: "center",
    borderRadius: 15,
    margin: "2%",


  },
  TipImage: {
    borderRadius: 20,
    width: "100%",
    height: "100%",

  },
  TipTitleContainer: {
    //backgroundColor:"#ff0",
    width: "93%",
    alignSelf: "center",
    margin: "2%",
    marginTop: "5%",
    height: "6%"

  },
  TipTitleText: {
    color: "#000",
    fontFamily: "BodoniModa_9pt-Bold",
    fontSize: 26,

  },
  TipDescription: {
    height: "28%",
    marginHorizontal: "5%",
    width: "70%",
    fontSize: 24,
    color: "#000",
    flexWrap: "wrap",
    fontFamily: "GFSNeohellenic-BoldItalic",


  },
  ArrowUpIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#9067C6",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    padding: "4%",
    margin: "4%",
    top: -45,


    alignContent: "center",






  },
  TabProfileContainer: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between"
  } ,
  TabProfileText :{
    color: "#242038",
    fontSize: 20,
    textAlign: "center",
    padding: "2%",
    alignSelf: "center",
    fontFamily: "BodoniModa_9pt-Bold"
  } ,
  SquareOfSymptoms:{
    width: "32%",
    height: "85%",
    backgroundColor: "#fff",
  },
  TextOfSysmptoms:
  {
    color: "#9067C6",
    fontSize: 14,
    textAlign: "center",


    fontFamily: "BodoniModa_9pt-ExtraBold",

  },
  ImageOfSymptoms:{
    width: "90%",
    height: "90%",
    borderRadius: 5,



    alignSelf: "center"

  }
})