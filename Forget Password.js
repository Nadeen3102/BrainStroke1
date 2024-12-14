import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} >
      <AntDesign name="arrowleft" size={35} color="White" backgroundColor='#9067c6'  style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.text1}>Forget Password?</Text>
      <Text style={styles.text2}>Enter the email address with your account and we will send an email with confirmation to reset your password.</Text>
      <Text style={styles.text3}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#9067c6"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Send Code</Text>
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
    paddingHorizontal: 24,
    },
   icon: {
    marginVertical: 24,
    alignSelf:'flex-start',
    borderRadius:50,
    color:'#fff',
   },
  text1:{
    color:"#8d86c9",
    alignSelf:'baseline',
    fontWeight:'bold',
    marginVertical:"15%"

  },
  text2:{
    textAlign:"justify",
    
  },
text3:{size:20,
alignSelf:'baseline',
paddingHorizontal:15,
marginTop:"15%",
marginBottom:'5%'


},
  input: {
    borderWidth: 1,
    borderColor: '#cac4ce',
    borderRadius: 18,
    padding: 12,
    width: '100%',
    marginBottom: '10%',
  
  },
  button: {width:'50%',
    backgroundColor: '#9067c6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 18,
    alignSelf:'center',
    marginVertical:"10%"
    
  },
  buttonText: {
    textAlign:'center',  
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color:'#fff'
  
  },
});

export default ForgotPasswordScreen;