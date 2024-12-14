import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(120);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: '90%',
              height: '50%',
              marginBottom: '5%',
              borderRadius: 30,
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignContent: 'space-between',
              alignItems: 'center',
              width: '95%',
              height: '20%',
            }}>
            <TouchableOpacity>
              
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#8d86c9',
                borderRadius: 50,
                width: 100,
                height: 100,
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                {counter}
              </Text>
            </View>
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View>
          </View>
           <View style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignSelf:'center',
              width: '95%',
              height: '10%',
              backgroundColor:'#9067c6',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              marginTop:'3%'
            }}>
            <TouchableOpacity >
            <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>Continue</Text>
            </TouchableOpacity>
          <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  paddingRight:'10%'
                }}>
                {counter}
              </Text>
               <TouchableOpacity>
            <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Skip
              </Text>
            </TouchableOpacity>
        </View>
      </>
    );
  }

