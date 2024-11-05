import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import PlannerScreen from './screens/PlannerScreen';
import Navigation from './navigation';
export default function App() {
  return (
    <>
      <Navigation/> 
       {/* 渲染首页屏幕 */} 
     
      {/*  <PlannerScreen/>*/}
      <StatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
