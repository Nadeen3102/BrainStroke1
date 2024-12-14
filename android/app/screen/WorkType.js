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
import { SelectList } from 'react-native-dropdown-select-list'
library.add(fab, faSquareCheck, faArrowUp)



export default function WorkType({ navigation , route }) {
const {gender,age,hypertension,heart,ever_married}=route.params;
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'Self Employed' },
    { key: '2', value: 'Private' },
    { key: '3', value: 'Government Job' },
    { key :'4', value:'Children'},
    { key :'5', value:'Never Worked'}

  ]

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
            fontFamily: "BodoniModa_9pt-ExtraBold"




          }}>
           One More ...
          </Text>

        </View>
        <Progress.Bar
          style={{
            width: "91%",
            alignSelf: "center"
          }}
          progress={0.6}
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
          fontFamily: "BodoniModa_9pt-Medium",
          justifyContent: "center",
          marginVertical: "10%",
          //backgroundColor:"#0ff"



        }}>
          What is your current work type ?
        </Text>

        <View style={{
          flex: 1,
          alignSelf:"center",
          width:"90%"

        }}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            style={{
              width: "90%",
              alignSelf: "center",
              

            }}
            dropdownStyles={{backgroundColor:"#9067C6"}}
            dropdownTextStyles={{fontFamily:"BodoniModa_9pt-Medium", color:"#fff"}}
            placeholder='Select a state'

          />
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate("Residence"),{age,gender,hypertension,heart,ever_married,workType :selected}} }
        >
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
    </>
  );
}
