import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Icon,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const PasswordReset = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <View style={styles.container}>
   <TouchableOpacity style={styles.icon} >
      <AntDesign name="arrowleft" size={35} color="White" backgroundColor='#9067c6'  style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.text1}>Creat new Password</Text>
      <Text style={styles.text2}>This password should be different from the previous password.</Text>
      <Text style={styles.label}>Current Password:</Text>
     
      <TextInput
        style={styles.input}
        secureTextEntry
        value={oldPassword}
        onChangeText={text => setOldPassword(text)}
          placeholder="Enter your Password"
        placeholderTextColor="#9067c6" 
        // right={<TextInput.Icon name="eyeo" size={24} color="black"  />}
        />
      <Text style={styles.label}>New Password:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
        placeholder="Enter your new Password"
        placeholderTextColor="#9067c6"
        // right=<AntDesign name="eyeo" size={24} color="black" />
      />
      
      <TouchableOpacity  >
        <Text style={styles.button}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f7ece1',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    
  },icon: {
    marginVertical: 15,
    alignSelf:'baseline',
    borderRadius:50,
    color:'#fff',
   },
   text1:{
    color:"#8d86c9",
    alignSelf:'flex-start',
    fontWeight:'bold',
    marginVertical:"10%",
    marginHorizontal:"5%"

  },text2:{
    textAlign:"justify",
    marginHorizontal:'5%',
    alignSelf:'flex-start',
    },
  label: {size:20,
alignSelf:'flex-start',
paddingHorizontal:'10%',
marginTop:"15%",
// marginBottom:'5%'


},
  input: {
    borderWidth: 1,
    borderColor: '#cac4ce',
    borderRadius: 18,
    padding: 12,
    width: '80%',
    // marginBottom: '5%',
  
  },  button: {width:'80%',
    backgroundColor: '#9067c6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 18,
    alignSelf:'center',
    marginVertical:"10%",
    color:'#fff'
    
  },
});

export default PasswordReset;