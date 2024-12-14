import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput } from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showmodal: false,
      defaultVal: "",
      color1: false,
      Color2: false,
      Color3: false,
      item_deatils: {},


      array_data2: [
        {

          text: "How old are you ?",

        }, {
          text: "What is your current BMI ?",

        },
        {

          text: "What is your average glucose level ?",

        }
        ,
        {

          text: "What is your current marital status ?",

        }
        ,
        {

          text: "What is your smoking level ?",

        }
      ]
    }
  }
  render() {
    //js scope


    return (
      <>

        <View style={{
          backgroundColor: "#fff",
          height: "100%",
          width: "100%",
        }}>

          
         
          <View style={{

            height: "20%",
            width: "100%",
            alignSelf: "center",
            // backgroundColor:"#0f0"



          }}>

            <View style={{

              //backgroundColor:"#ff0",
              height: "36%",
              width: "100%",
              alignSelf: "center",
              flexDirection: "row",
              borderTopWidth: 2,
              borderColor: "#dadce0",

            }}>






            </View>

            <View style={{

              // backgroundColor: "#ff0",
              height: "28%",
              width: "100%",
              alignSelf: "center",
              flexDirection: "row",


            }}>

            </View>


            <View style={{

              //backgroundColor: "#ff0",
              height: "30%",
              width: "100%",
              alignSelf: "center",


            }}>





              <View style={{
                flexDirection: "row",
                //backgroundColor:"#0f0",
                height: "60%"
              }}>

                <TouchableOpacity onPress={() => {

                  this.setState({
                    Color2: false,
                    Color3: !this.state.Color3,



                  })
                }}
                >

                </TouchableOpacity>
              </View>

            </View>

          </View>
          <ScrollView>
            <View style={{
              height: "100%",
              width: "100%",


            }}>


              {this.state.array_data2.map((item, index) => (

                <TouchableOpacity
                  onPress={() => {
                    console.log(item)
                    this.setState({ item_deatils: item, showmodal: true })
                  }}

                  style={{

                    //backgroundColor: "#ff0",
                    height: "35%",
                    width: "99%",
                    alignSelf: "center",
                    flexDirection: "row",


                  }}>


                  <View style={{
                    flexDirection: "column",
                    height: "60%",
                    width: "90%",
                    //backgroundColor:"#0f0",
                    marginVertical: 2,
                  }}>
                    <Text style={{
                      color: "#000",
                      fontSize: 18,
                      fontWeight: "500",
                      maxWidth: "68%",
                      flexWrap: "wrap",



                    }}>
                      {item.text}
                    </Text>

                    <View style={{

                      backgroundColor: "#7dd4d6",
                      height: 50,
                      width: "100%",
                      flexDirection: "row",




                      borderColor: "#fff"
                    }}>

                      <View style={{
                        height: "80%",
                        width: 340,
                        backgroundColor: "#000",
                        marginHorizontal: 24,
                        marginVertical: 5,
                        flexDirection: "row",
                        borderRadius: 8,
                        alignItems: "center",
                        shadowOpacity: 1,
                        shadowColor: "#9aa0a6"

                      }}>

                        <TextInput
                          style={{
                            height: "100%",
                            width: "90%",

                            backgroundColor: "#fff",
                            color: this.state.color1 ? '#969696' : "#000",

                            alignSelf: "flex-end",
                            alignItems: 'flex-end',
                            alignContent: "flex-start",
                            fontWeight: "bold",
                            padding: 10,
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            fontSize: 16,
                            borderTopRightRadius: 8,
                            borderBottomRightRadius: 8,

                          }}
                          value={this.state.defaultVal + ""}
                          placeholder="Search"
                          placeholderTextColor={"#63686d"}

                          onChangeText={(newVal) => {
                            console.log(newVal)
                            this.setState({ defaultVal: newVal })

                          }}
                        >


                        </TextInput>
                      </View>
                    </View>




                  </View>

                </TouchableOpacity>

              ))}


            </View>
          </ScrollView>








        </View >

        <Modal
          visible={this.state.showmodal}
          onRequestClose={() => {
            this.setState({ showmodal: false })
          }}
          animationType='slide'
        >
          <View style={{
            flexDirection: "column",

            width: "90%",
            //backgroundColor:"#0f0",
            marginVertical: 2,
          }}>
            <Image style={{
              width: "90%",
              height: "50%",
              margin: 8,
              borderRadius: 10,
              resizeMode: "stretch",






            }

            }
              source={this.state.item_deatils.image} />


            <Text style={{
              color: "#000",
              fontSize: 22,
              fontWeight: "500",
              maxWidth: "88%",
              flexWrap: "wrap",

              margin: 8,
            }

            }>
              {this.state.item_deatils.text}
            </Text>
            <View style={{
              flexDirection: "row",
              width: "100%",

            }}>
              <Text style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "500",
                maxWidth: "68%",
                flexWrap: "wrap",
                paddingBottom: 4,
                paddingHorizontal: 4,
                marginLeft: 8,




              }}>
                {this.state.item_deatils.coin}
              </Text>
              <Text style={{
                color: "#000",
                fontSize: 24,
                fontWeight: "bold",
                maxWidth: "68%",
                flexWrap: "wrap",



              }}>
                {this.state.item_deatils.price}
              </Text>
            </View>

            <Text style={{
              color: "#63686d",
              fontSize: 20,
              fontWeight: "400",
              maxWidth: "68%",
              flexWrap: "wrap",



            }}>
              {this.state.item_deatils.promo}
            </Text>

            <View style={{
              flexDirection: "row",
              width: "100%",

            }}>
              <Text style={{
                color: "#63686d",
                fontSize: 18,
                fontWeight: "400",
                maxWidth: "90%",
                flexWrap: "wrap",



              }}>
                {this.state.item_deatils.shippment}
              </Text>
              <Text style={{
                color: "#63686d",
                fontSize: 18,
                fontWeight: "600",
                maxWidth: "90%",
                flexWrap: "wrap",



              }}>
                {this.state.item_deatils.date}
              </Text>
            </View>
            <Text style={{
              color: "#63686d",
              fontSize: 18,
              fontWeight: "600",
              maxWidth: "90%",
              flexWrap: "wrap",



            }}>
              {this.state.item_deatils.fulfilled}
            </Text>
            <Text style={{
              color: "#63686d",
              fontSize: 18,
              fontWeight: "600",
              maxWidth: "90%",
              flexWrap: "wrap",



            }}>
              {this.state.item_deatils.stock}
            </Text>


          </View>
        </Modal>
      </>
    );
  }
}