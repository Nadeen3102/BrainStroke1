import * as React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Modal, TouchableOpacity, TextInput, animated, ImageBackground, Button, BackHandler } from "react-native"
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import * as Progress from 'react-native-progress';
import { icon } from "react-native-vector-icons/FontAwesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faLightbulb, faTruckMedical, faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp, height } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import call from 'react-native-phone-call'
import Doctor from "./android/app/screen/Doctor";
import Signup from "./android/app/screen/Signup";
import GetStarted from "./android/app/screen/GetStarted"
import Signin from "./android/app/screen/Signin"
import Home from './android/app/screen/Home';
import Heart from './android/app/screen/Heart';
import Age from './android/app/screen/Age';
import Residence from './android/app/screen/Residence';
import Hypertension from './android/app/screen/Hypertension';
import Marital from './android/app/screen/Marital';
import Bmi from './android/app/screen/Bmi';
import Gender from './android/app/screen/Gender';
import Glucose from './android/app/screen/Glucose';
import WorkType from './android/app/screen/WorkType';
import Smoking from './android/app/screen/Smoking';
import TipOne from './android/app/screen/TipOne';
import TipTwo from './android/app/screen/TipTwo';
import TipThree from './android/app/screen/TipThree'
import TipFour from './android/app/screen/TipFour';
import TipFive from './android/app/screen/TipFive';
import TipSix from './android/app/screen/TipSix';
import TipSeven from './android/app/screen/TipSeven';
import profile from './android/app/screen/profile';
import Symptoms from './android/app/screen/Symptoms';
import PickPlan from './android/app/screen/PickPlan';
import KindOfDiet from './android/app/screen/KindOfDiet';
import Emergency from './android/app/screen/Emergency';
import PredictionScreen from './android/app/screen/PredictionScreen';
import High from './android/app/screen/High'
/*import foodPage from './android/app/screen/foodPage';*/
import HomeOfMeals from './android/app/screen/HomeOfMeals';
import PlanFood from './android/app/screen/PlanFood';
library.add(fab, faArrowUp, faArrowRight, faHouse, faBars, faLightbulb, faTruckMedical)





const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();






function TabPages() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#9067C6',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,

        tabBarStyle: {

          alignSelf: "center",
          width: "90%",
          height: '6%',
          borderRadius: 10,


        }

      })}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity >
              <FontAwesomeIcon icon={faHouse} size={20} color={focused ? "#9067C6" : "#000"} />
            </TouchableOpacity>
          )
        }}



      />
      <Tab.Screen name="Tips" component={Tips}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faLightbulb} size={20} color={focused ? "#9067C6" : "#000"} />
          )
        }} />

      <Tab.Screen name="profile" component={profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faUser} size={20} color={focused ? "#9067C6" : "#000"} />
          )
        }} />
      <Tab.Screen name="Emergency" component={Emergency}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon icon={faTruckMedical} size={20} color={focused ? "#9067C6" : "#000"}/>)
          }} />
        
    

    </Tab.Navigator>


  );
}
function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile" component={profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}



function Tips() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TipOne" component={TipOne} options={{ headerShown: false }} />
      <Stack.Screen name="TipTwo" component={TipTwo} options={{ headerShown: false }} />
      <Stack.Screen name="TipThree" component={TipThree} options={{ headerShown: false }} />
      <Stack.Screen name="TipFour" component={TipFour} options={{ headerShown: false }} />
      <Stack.Screen name="TipFive" component={TipFive} options={{ headerShown: false }} />
      <Stack.Screen name="TipSix" component={TipSix} options={{ headerShown: false }} />
      <Stack.Screen name="TipSeven" component={TipSeven} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/*function meals(){
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeOfMeals" component={HomeOfMeals} options={{ headerShown: false }} /> 
        <Stack.Screen name="foodPage" component={foodPage} options={{ headerShown: false }} /> 
        <Stack.Screen name="kindOfDiet" component={kindOfDiet} options={{ headerShown: false }} /> 
    </Stack.Navigator>
  )
}
*/

function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator  >
        <Stack.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name='TabPages' component={TabPages} options={{ headerShown: false }} />
        <Stack.Screen name="Heart" component={Heart} options={{ headerShown: false }} />
        <Stack.Screen name="Age" component={Age} options={{ headerShown: false }} />
        <Stack.Screen name="Residence" component={Residence} options={{ headerShown: false }} />
        <Stack.Screen name="Hypertension" component={Hypertension} options={{ headerShown: false }} />
        <Stack.Screen name="Marital" component={Marital} options={{ headerShown: false }} />
        <Stack.Screen name="Bmi" component={Bmi} options={{ headerShown: false }} />
        <Stack.Screen name="Gender" component={Gender} options={{ headerShown: false }} />
        <Stack.Screen name="Glucose" component={Glucose} options={{ headerShown: false }} />
        <Stack.Screen name="WorkType" component={WorkType} options={{ headerShown: false }} />
        <Stack.Screen name="Smoking" component={Smoking} options={{ headerShown: false }} />
        <Stack.Screen name="Symptoms" component={Symptoms} options={{ headerShown: false }} />
        <Stack.Screen name="PickPlan" component={PickPlan} options={{ headerShown: false }} />
        <Stack.Screen name="HomeOfMeals" component={HomeOfMeals} options={{ headerShown: false }} />
        <Stack.Screen name="KindOfDiet" component={KindOfDiet} options={{ headerShown: false }} />
        <Stack.Screen name="High" component={High} options={{ headerShown: false }} />
       <Stack.Screen name="PredictionScreen" component={PredictionScreen} options={{ headerShown: false }} />
       <Stack.Screen name="PlanFood" component={PlanFood} options={{ headerShown: false }} />


      </Stack.Navigator>


    </NavigationContainer>
  );
}


export default App;