import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
const image = {
  uri: 'https://plus.unsplash.com/premium_photo-1674147611133-be87db07f597?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTQyNDM0MHx8ZW58MHx8fHx8',
};
export default function KindOfDiet({ navigation }) {

  
  return (
    <>
  <View
    style={{
      flex: 1,
      paddingBottom: '1%',
      paddingHorizontal: '1%',
      alignItems: 'center',
      alignContent: 'space-around',
    }}>
    <Image
      source={image}
      style={{
        width: '95%',
        height: '30%',
        marginBottom: '2%',
      }}
    />
    <Text
      style={{
        fontSize: 20,
        maxWidth: '90%',
        textAlign: 'left',
        marginBottom: '2%',
        fontFamily: 'Avenir-Roman',
        fontStyle:'italic',
        color:"#000"

      }}>
      want know what you eat? this will help you know how many calories you eat
      through a day and what are the ingredients in your meal!
    </Text>
    <TouchableOpacity
      style={{
        width: '20%',
        height: '5%',
        backgroundColor: '#8d86c9',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginHorizontal: '3%',
        marginBottom: '2%',
        paddingHorizontal:"2%",
        borderRadius: 15,
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Scan
      </Text>
    </TouchableOpacity>
    <Text
      style={{
        fontSize: 22,
        maxWidth: '80%',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginBottom: '10%',
        alignSelf: 'flex-start',
        marginHorizontal: '6%',
        color: '#8d86c9',
      }}>
      Diet categories
    </Text>
    <View
      style={{
        width: '100%',
        height: '26%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        // paddingVertical: '10%',
      }}>
      <TouchableOpacity
        style={{
          width: '45%',
          height: '100%',
        }}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1556040220-704dadc2b747?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{
              justifyContent: 'space-between',
            flex: 1,
          }}
          imageStyle={{ borderRadius: 15 ,
          height:'120%'}}
          resizeMode="cover">

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              color:"#000",
            }}>
            Keto Diet
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
                { navigation.navigate("PlanFood") }}}
        style={{
          width: '45%',
          height: '100%',
        }}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1543363575-d306a0b37c9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDh8fHxlbnwwfHx8fHw%3D',
          }}
          imageStyle={{ borderRadius: 15 ,
          height:'120%'}}
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}
          resizeMode='cover'>
     
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              color:"#000"
              
            }}>
            Vegan Diet
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  </View>
  </>
  ); }
          