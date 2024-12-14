/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import doctor from './android/app/screen/Doctor';
import Signup from './android/app/screen/Signup';
import Signin from './android/app/screen/Signin';
AppRegistry.registerComponent(appName, () => App);
