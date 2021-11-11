/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import EditableIntervalTimer from './src/intervalTimers/Screens/editableIntervalTimer';
import TimerList from './src/Timers/Screens/timerList';

AppRegistry.registerComponent(appName, () => EditableIntervalTimer);
